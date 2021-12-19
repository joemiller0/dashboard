import { useEffect, useState } from "react";
import { Nav, CreateWorkoutForm,  CreateLogForm, Calendar, LogList } from './components/components.js';
import "./stylesheets/dashboard.css";

export const Dashboard = () => {
    const [logs, setLogs] = useState([]);
    const [athlete, setAthlete] = useState({});
    const [logFormView, setLogFormView] = useState(false);
    // const [workoutFormView, setwWorkoutFormView] = useState(false);

    useEffect(()=>{
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
    },[])

    const logFormViewSwitch = e => {
        setLogFormView(!logFormView)
    }

    // const workoutFormViewSwitch = e => {
    //     setwWorkoutFormView(!workoutFormView)
    // }

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
                setLogs({...logs, [key]:log[0]})
            })
            .catch(err => console.log(err))
    }
    const deleteLog = id => {
        console.log(id)
        // fetch(`http://localhost:5000/logs/${log.id}`, {method: "DELETE"})
    }

    return (
        <div className="dashboard">
            <Nav 
                logFormViewSwitch={logFormViewSwitch} 
                // workoutFormViewSwitch={workoutFormViewSwitch} 
                athlete={athlete}
            />


                <div className="inner-dash">
                    <LogList logs={logs} />
                    <Calendar deleteLog={deleteLog} logs={logs} />
                </div>

            {/* {workoutFormView === true &&
                <div>
                    <div onClick={workoutFormViewSwitch} className="dimmed-bg" />
                    <CreateWorkoutForm 
                        workoutFormViewSwitch={workoutFormViewSwitch} 
                    />
                </div>
            } */}
            {logFormView === true &&
                <div>
                    <div onClick={logFormViewSwitch} className="dimmed-bg" />
                    <CreateLogForm logFormViewSwitch={logFormViewSwitch} createLog={createLog} />
                </div>
            }
        </div>
    );
}