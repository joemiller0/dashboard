import { useState } from "react";

function useApi() {
    const [logs, setLogs] = useState([]);
    const [athlete, setAthlete] = useState({});

    const initialCall = e => {
        const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
        const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;
        if (!clientId || !clientSecret) return;

        fetch(`https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(res => res.json())
            .then(tokenData => {
                fetch(`https://www.strava.com/api/v3/athlete?access_token=${tokenData.access_token}`)
                .then(res => res.json())
                .then(athlete => setAthlete(athlete));
                
                fetch(`https://www.strava.com/api/v3/activities?access_token=${tokenData.access_token}`)
                    .then(res => res.json())
                    .then(activities => {
                        activities.forEach( stravaLog => {
                                fetch("http://localhost:5000/import", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "application/json",
                                    },
                                    body: JSON.stringify({
                                        "lid": stravaLog.id,
                                        "body": null,
                                        "date": null, 
                                        "time": null,
                                        "stravaLog": stravaLog
                                    })
                                })
                                    .then(res => res.json())
                                    .then(logs => console.log(logs))
                        })

                        fetch("http://localhost:5000/logs")
                            .then((res)=>res.json())
                            .then(logs => {
                                let logsObj = {}
                                logs.forEach((log) => {
                                    if (log.date === null){
                                        const date = log.stravalog.start_date_local.split('T')[0];
                                        if (!logsObj[date]) {
                                            logsObj[date] = [log]
                                        } else {
                                            logsObj[date].push(log)
                                        }
                                    } else {
                                        const date = log.date.split('T')[0];
                                        if (!logsObj[date]) {
                                            logsObj[date] = [log]
                                        } else {
                                            logsObj[log.date].push(log)
                                        }
                                    }
                                })
                                setLogs(logsObj)
                                // setDates(Object.keys(logsObj))
                            })

                    });
            });
    }

    const createLog = log => {
        fetch("http://localhost:5000/logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "lid": log.lid,
                "body": log.body,
                "date": log.date, 
                "time": log.time,
                "stravaLog": log.stravalog
            })
        })
            .then(res => res.json())
            .then(log => {
                const allLogs = logs.push(log)
                console.log(log)

                // this is just the VALUE, YOU NEED A KEY VALUE PAIR IN AN OBJECT, GRAB THE DATE AND MAKE A KEY HERE
            })
    }

    return {
        logs,
        athlete,
        createLog, 
        initialCall
    };
}

export { useApi };
