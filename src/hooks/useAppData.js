import { useState, useEffect } from "react";

function useAppData() {
    const [workouts, setWorkouts] = useState({})
    const [athlete, setAthlete] = useState({});

    useEffect(() => {
        const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
        const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;
        if (!clientId || !clientSecret) return
        const refreshUrl = `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

        fetch(refreshUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(tokenData => {
                const activitiesUrl = `https://www.strava.com/api/v3/activities?access_token=${tokenData.access_token}`;
                const athleteUrl = `https://www.strava.com/api/v3/athlete?access_token=${tokenData.access_token}`;

                fetch(activitiesUrl)
                    .then((res) => res.json())
                    .then((activities) => {
                        let workoutsObj = {}
                        activities.forEach((workout) => {
                            const date = workout.start_date_local.split('T')[0];
                            if (!workoutsObj[date]) {
                                workoutsObj[date] = [workout]
                            } else {
                                workoutsObj[date].push(workout)
                            }
                        })
                        setWorkouts(workoutsObj)
                        // setDates(Object.keys(workoutsObj))
                        fetch(athleteUrl)
                            .then((res)=> res.json())
                            .then(athlete => setAthlete(athlete))
                    });
            })
    }, []);

    const createWorkout =(object)=> {
        console.log(object);
    }

    return {
        workouts,
        athlete, 
        createWorkout
    };
}

export { useAppData };