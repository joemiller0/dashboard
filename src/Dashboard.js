import { useEffect, useState } from "react";
import { Nav, CreateLogForm, CreateProgramForm, Calendar, ProgramManager } from './components/components.js';
import "./stylesheets/dashboard.css";

export const Dashboard = () => {
    const [logs, setLogs] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [programs, setPrograms] = useState([]);
    const [athlete, setAthlete] = useState({});
    const [logFormView, setLogFormView] = useState(false);
    const [programFormView, setProgramFormView] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //API Authentication and initial import and formatting of logs from strava 
    useEffect(() => {
        const clientId = process.env.REACT_APP_STRAVA_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_STRAVA_CLIENT_SECRET;
        const refreshToken = process.env.REACT_APP_STRAVA_REFRESH_TOKEN;
        if (!clientId || !clientSecret) return;
        setIsLoading(true);
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
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, [])

    // initial import of programs
    useEffect(()=>{
        fetch("http://localhost:5000/programs")
            .then(res=>res.json())
            .then(programs=>setPrograms(programs))
    }, [])

    const logFormViewSwitch = e => {
        setLogFormView(!logFormView)
    }
    const programFormViewSwitch = e => {
        setProgramFormView(!programFormView)
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
                setLogs({ ...logs, [key]: log })
            })
            .catch(err => console.log(err))
    }

    const deleteLog = (id, date) => {
        fetch(`http://localhost:5000/logs/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => {
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

    const createProgram = ({title, startDate, endDate, description}) => {
        fetch("http://localhost:5000/programs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "title": title,
                "start_date": startDate,
                "end_date": endDate,
                "description": description,
                "workouts":[]
            })
        })
            .then(res => res.json())
            .then(program => {
                console.log(program)
                setPrograms([...programs, program[0]])
            })
            .catch(err => console.log(err))
    }

    // const createSomething = (thingToCreate, payload) => {
    //     fetch(`http://localhost:5000/${thingToCreate}`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify({
    //             payload
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(thingCreated => {
    //             console.log(thingCreated)
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="dashboard">
            <Nav
                logFormViewSwitch={logFormViewSwitch}
                programFormViewSwitch={programFormViewSwitch}
                athlete={athlete}
            />
            <div className="flex">
                <ProgramManager createProgram={createProgram} programs={programs}/>
            </div>

            <div className="flex">
                <Calendar deleteLog={deleteLog} logs={logs} isLoading={isLoading}/>
            </div>

            {logFormView === true &&
                <div>
                    <div onClick={logFormViewSwitch} className="dimmed-bg" />
                    <CreateLogForm logFormViewSwitch={logFormViewSwitch} createLog={createLog} />
                </div>
            }
            {programFormView === true &&
                <div>
                    <div onClick={programFormViewSwitch} className="dimmed-bg" />
                    <CreateProgramForm programFormViewSwitch={programFormViewSwitch} createProgram={createProgram} workouts={workouts}/>
                </div>
            }
        </div>
    );
}