import { useEffect, useState } from "react";
import Calendar from './components/Calendar/Calendar';
import WeekPlanner from './components/WeekPlanner/WeekPlanner';
import "./stylesheets/dashboard.css";

const Dashboard = () => {
    const [workouts, setWorkouts] = useState({})
    // const [dates, setDates] = useState([])

    useEffect(() => {
        const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
        const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;

        if (!clientId || !clientSecret) return

        const authUrl = "https://www.strava.com/oauth/token";
        const refreshUrl = `${authUrl}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

        fetch(refreshUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(tokenData => {
                const activitiesUrl = "https://www.strava.com/api/v3/activities";
                const getActivitiesUrl = `${activitiesUrl}?access_token=${tokenData.access_token}`;

                fetch(getActivitiesUrl)
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
                    });
            })


    }, []);

    return (
        <div className="dashboard">
            <Calendar workouts={workouts} />
            <WeekPlanner />
        </div>
    );
}

export default Dashboard;
