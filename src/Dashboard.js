import { useState } from "react";
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
    const [logFormView, setLogFormView] = useState(false);
    const [workoutFormView, setwWorkoutFormView] = useState(false);
    const [workouts, setWorkouts] = useState([]);


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
    
    return (
        <div className="dashboard">
            <Nav 
                logFormViewSwitch={logFormViewSwitch} 
                workoutFormViewSwitch={workoutFormViewSwitch} 
                athlete={athlete}
            />

            <div className="inner-dash">
                {/* <LogList /> */}
                <Calendar logs={logs}/>
            </div>

            <div className="inner-dash">
                <WorkoutList workouts={workouts}/>
                <WeekPlanner workouts={workouts}/>
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
                    <CreateLogForm logFormViewSwitch={logFormViewSwitch} />
                </div>
            }
        </div>
    );
}

export default Dashboard;
