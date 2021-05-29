import { useEffect, useState } from "react";
// import WorkoutList from './components/WorkoutList';
import Calendar from './components/Calendar/Calendar';

const Dashboard = () => {
    const [activities, setActivities] = useState([]);

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
                    .then((activities) =>  setActivities(activities));
            })

    }, []);

    return (
        <div className="dashboard">
            {/* <WorkoutList activities={activities} /> */}
            <Calendar activities={activities} />
        </div>
    );
}

export default Dashboard;
