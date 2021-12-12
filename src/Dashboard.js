import { useEffect, useState } from "react";
import { useApi } from "./hooks/hooks";
import Nav from './components/UI/Nav';
import CreateWorkoutForm from './components/Forms/CreateWorkoutForm.js';
import CreateLogForm from './components/Forms/CreateLogForm.js';
import Calendar from './components/Calendar/Calendar';
import WorkoutList from './components/WorkoutList/WorkoutList';
import LogList from './components/LogList/LogList';
import WeekPlanner from './components/WeekPlanner/WeekPlanner';
import "./stylesheets/dashboard.css";

const Dashboard = () => {
    const { logs, athlete } = useApi();
    const [localLogs, setLocalLogs] = useState({});
    const [logFormView, setLogFormView] = useState(false);
    const [workoutFormView, setwWorkoutFormView] = useState(false);
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        setLocalLogs(logs)
    }, 
        [logs]
    );

    const logFormViewSwitch = e => {
        setLogFormView(!logFormView)
    }

    const workoutFormViewSwitch = e => {
        setwWorkoutFormView(!workoutFormView)
    }

    const createWorkout = object => {
        if (workouts) {
            workouts.push(object)
        } else {
            setWorkouts(object)
        }
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
                console.log(log[0].date)

                setLocalLogs((prevState)=>{
                    console.log(prevState)
                    prevState[key] = log[0]
                })
            })
    }
    console.log(localLogs) //this is undefined after the createLog function runs
    return (
        <div className="dashboard">
            <Nav 
                logFormViewSwitch={logFormViewSwitch} 
                workoutFormViewSwitch={workoutFormViewSwitch} 
                athlete={athlete}
            />


                <div className="inner-dash">
                    <LogList logs={localLogs} />
                    <Calendar logs={localLogs} />
                </div>


            <div className="inner-dash">
                <WorkoutList workouts={workouts} />
                <WeekPlanner workouts={workouts} />
            </div>

            {workoutFormView === true &&
                <div>
                    <div onClick={workoutFormViewSwitch} className="dimmed-bg" />
                    <CreateWorkoutForm 
                        workoutFormViewSwitch={workoutFormViewSwitch} 
                        createWorkout={createWorkout} />
                </div>
            }
            {logFormView === true &&
                <div>
                    <div onClick={logFormViewSwitch} className="dimmed-bg" />
                    <CreateLogForm logFormViewSwitch={logFormViewSwitch} createLog={createLog} />
                </div>
            }
        </div>
    );
}

export default Dashboard;
