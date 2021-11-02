import { useState } from "react";
import Nav from './components/UI/Nav';
import CreateWorkoutForm from './components/Forms/CreateWorkoutForm.js';
import Calendar from './components/Calendar/Calendar';
import WorkoutList from './components/WorkoutList/WorkoutList';
import LogList from './components/LogList/LogList';
import { useApiData } from "./hooks/hooks";
import "./stylesheets/dashboard.css";
// import "./stylesheets/calendar.css";
import WeekPlanner from './components/WeekPlanner/WeekPlanner';

const Dashboard = () => {
    const { logs, athlete } = useApiData();
    console.log(logs)
    const [logFormView, setLogFormView] = useState(false);
    const [workoutFormView, setwWorkoutFormView] = useState(false);
    const [workouts, setWorkouts] = useState([]);

    const logFormViewSwitch = e => {
        setLogFormView(!logFormView)
    }

    const workoutFormViewSwitch =(e)=> {
        setwWorkoutFormView(!workoutFormView)
    }
    const createWorkout =(object)=> {
        if (workouts) {
            workouts.push(object)
        } else {
            setWorkouts(object)
        }
    }
    return (
        <div className="dashboard">
            <Nav workoutFormViewSwitch={workoutFormViewSwitch} athlete={athlete}/>
            <div className="inner-dash">
                <LogList logs={logs}/>
                <Calendar logs={logs} />
            </div>
            <div className="inner-dash">
                <WorkoutList workouts={workouts}/>
                <WeekPlanner workouts={workouts}/>
            </div>

            {workoutFormView === true &&
                <div>
                    <div onClick={workoutFormViewSwitch} className="dimmed-bg" />
                    <CreateWorkoutForm workoutFormViewSwitch={workoutFormViewSwitch} createWorkout={createWorkout} />
                </div>
            }
        </div>
    );
}

export default Dashboard;
