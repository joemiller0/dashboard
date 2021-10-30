import { useState, useEffect } from "react";

function useStravaData() {
    const [stravaLogs, SetStravaLogs] = useState([]);
    const [athlete, setAthlete] = useState({});

    useEffect(() => {
        const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
        const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;
        if (!clientId || !clientSecret) return;
        const refreshUrl = `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

        fetch(refreshUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((tokenData) => {
                const activitiesUrl = `https://www.strava.com/api/v3/activities?access_token=${tokenData.access_token}`;
                const athleteUrl = `https://www.strava.com/api/v3/athlete?access_token=${tokenData.access_token}`;
                fetch(athleteUrl)
                    .then(res => res.json())
                    .then(athlete => setAthlete(athlete));

                fetch(activitiesUrl)
                    .then(res => res.json())
                    .then(activities => {

                        activities.forEach( log =>{

                            console.log(log.upload_id)

                            fetch("http://localhost:5000/logs", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                },
                                body: JSON.stringify({
                                    "upload_id": log.upload_id,
                                    "body": log,
                                    "date": log.date, 
                                    "time": log.time
                                })
                            })
                                .then(res=>res.json())
                                .then(logs=>console.log(logs))

                        })

                        // fetch("http://localhost:5000/logs")
                        //     .then((res)=>res.json())
                        //     .then(localLogs => {
                        //         console.log(localLogs)
                        //         console.log(activities)

                        //         const allLogs = [...localLogs, ...activities];
                        //         console.log(allLogs)

                        //     })

                        // let stravaLogsObj = {}
                        // activities.forEach((stravaLog) => {
                        //     const date = stravaLog.start_date_local.split('T')[0];
                        //     if (!stravaLogsObj[date]) {
                        //         stravaLogsObj[date] = [stravaLog]
                        //     } else {
                        //         stravaLogsObj[date].push(stravaLog)
                        //     }
                        // })
                        // SetStravaLogs(stravaLogsObj)
                        // // setDates(Object.keys(stravaLogsObj))
                        // console.log(stravaLogs)
                    });
            });
    }, []);

    return {
        stravaLogs,
        athlete,
    };
}

export { useStravaData };
