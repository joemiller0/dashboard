import { useState } from "react";
import Nav from './components/UI/Nav';
import CreateWorkoutForm from './components/Forms/CreateWorkoutForm.js';
import Calendar from './components/Calendar/Calendar';
import WorkoutList from './components/WorkoutList/WorkoutList';
import { useAppData } from "./hooks/hooks";
import "./stylesheets/dashboard.css";
// import "./stylesheets/calendar.css";
// import WeekPlanner from './components/WeekPlanner/WeekPlanner';

const Dashboard = () => {
    const { createWorkout, stravaLogs, athlete, workouts } = useAppData();
    const [formViewState, setFormViewState] = useState(false);

    const workoutFormViewSwitch =(e)=> {
        setFormViewState(!formViewState)
    }
    return (
        <div className="dashboard">
            <Nav workoutFormViewSwitch={workoutFormViewSwitch} athlete={athlete}/>
            <Calendar stravaLogs={stravaLogs} />
            <WorkoutList workouts={workouts}/>
            {formViewState === true &&
                <div className="workout-modal-container">
                    <div onClick={workoutFormViewSwitch} className="dimmed-bg" />
                    <CreateWorkoutForm workoutFormViewSwitch={workoutFormViewSwitch} createWorkout={createWorkout} />
                </div>
            }
        </div>
    );
}

export default Dashboard;
