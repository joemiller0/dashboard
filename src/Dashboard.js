import { useEffect, useState } from "react";
import { Nav, CreateWorkoutForm, CreateLogForm, Calendar, LogList } from './components/components.js';
import "./stylesheets/dashboard.css";

export const Dashboard = () => {
    const [logs, setLogs] = useState([]);
    const [athlete, setAthlete] = useState({});
    const [logFormView, setLogFormView] = useState(false);

    useEffect(() => {
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
                    .then(athlete => setAthlete(athlete))
                    .catch(err => console.log(err))

                fetch(`https://www.strava.com/api/v3/activities?access_token=${tokenData.access_token}`)
                    .then(res => res.json())
                    .then(activities => {
                        activities.forEach(stravaLog => {
                            // console.log(typeof stravaLog.id)
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
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

        fetch("http://localhost:5000/logs")
            .then((res) => res.json())
            .then(logs => {
                let logsObj = {}
                logs.forEach((log) => {
                    if (log.date === null) {
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
            })
            .catch(err => console.log(err))
    }, [])

    const logFormViewSwitch = e => {
        setLogFormView(!logFormView)
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
                console.log(log)
                const key = log[0].date.split('T')[0]
                log[0].date = key
                setLogs({ ...logs, [key]: log[0] })
            })
            .catch(err => console.log(err))
    }

    const deleteLog = (id, date) => {
        fetch(`http://localhost:5000/logs/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => {
        //problem here is that sometimes logs[date] comes in as an object instead of an array. 
        //the log gets created the way we want it here. check console log at 102 - thats the format me want, maybe we can send the whole log up with delete and that way have the id and date with it and limit parameters
                // if (logs[date])

                console.log(Array.isArray(logs[date]))
                const newLogs = logs[date].filter(log => log.id != id)
                setLogs(() => {
                    if (newLogs.length) {
                        return {...logs, [date]: newLogs}
                    } else {
                        delete logs[date]
                        return { ...logs }
                    }
                })
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className="dashboard">
            <Nav
                logFormViewSwitch={logFormViewSwitch}
                athlete={athlete}
            />

            <div className="inner-dash">
                <LogList logs={logs} />
                <Calendar deleteLog={deleteLog} logs={logs} />
            </div>

            {logFormView === true &&
                <div>
                    <div onClick={logFormViewSwitch} className="dimmed-bg" />
                    <CreateLogForm logFormViewSwitch={logFormViewSwitch} createLog={createLog} />
                </div>
            }
        </div>
    );
}