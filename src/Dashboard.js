import { useEffect, useState, useRef } from "react";

function Dashboard() {
    const [refreshToken, setRefreshToken] = useState(process.env.REACT_APP_STRAVA_REFRESH_TOKEN);
    const [activities, setActivities] = useState([]);
    const tokensSet = useRef(false);

    useEffect(() => {
        if (!tokensSet.current) {

            const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
            const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
            const authUrl = "https://www.strava.com/oauth/token"
            const refreshUrl = `${authUrl}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

            fetch(refreshUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            })
                .then(res => res.json())
                .then(tokenData => {
                    setRefreshToken(tokenData.refresh_token);

                    const activitiesUrl = "https://www.strava.com/api/v3/activities";
                    const getActivitiesUrl = `${activitiesUrl}?access_token=${tokenData.access_token}`;
                    fetch(getActivitiesUrl)
                        .then((res) => res.json())
                        .then((activities) => setActivities(activities));
                })

            tokensSet.current = true;
        }
    }, [refreshToken]);


    return (
        <div className="App">
            <ul>
                {activities.map((a) => {
                    return <li key={a.id}>
                        {a.name}
                    </li>;
                })}
            </ul>
        </div>
    );
}

export default Dashboard;
