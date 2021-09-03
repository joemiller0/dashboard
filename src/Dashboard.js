import { useState } from "react";
import Nav from './components/UI/Nav';
import CreateWorkoutForm from './components/Forms/CreateWorkoutForm.js';
import Calendar from './components/Calendar/Calendar';
import { useAppData } from "./hooks/hooks";
import "./stylesheets/dashboard.css";
// import "./stylesheets/calendar.css";
// import WeekPlanner from './components/WeekPlanner/WeekPlanner';

const Dashboard = () => {
    const { createWorkout, workouts, athlete } = useAppData();
    const [formViewState, setFormViewState] = useState(false);

    const formViewSwitch =(e)=> {
        setFormViewState(!formViewState)
    }
    return (
        <div className="dashboard">
            <Nav formViewSwitch={formViewSwitch} athlete={athlete}/>
            <Calendar workouts={workouts} />
            {formViewState === true &&
                <div className="workout-modal-container">
                    <div onClick={formViewSwitch} className="dimmed-bg" />
                    <CreateWorkoutForm formViewSwitch={formViewSwitch} createWorkout={createWorkout} />
                </div>
            }
        </div>
    );
}

export default Dashboard;
