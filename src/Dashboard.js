import { useState } from "react";
import Nav from './components/UI/Nav';
import CreateWorkoutForm from './components/Forms/CreateWorkoutForm.js';
import Calendar from './components/Calendar/Calendar';
import { useAppData } from "./hooks/hooks";
import "./stylesheets/dashboard.css";
// import WeekPlanner from './components/WeekPlanner/WeekPlanner';

const Dashboard = () => {
    const { createWorkout, workouts, athlete } = useAppData();
    const [formViewState, setFormViewState] = useState(false);

    const formViewSwitch =(e)=> {

    }
    return (
        <div className="dashboard">
            <Nav athlete={athlete}/>
            <Calendar workouts={workouts} />
            <CreateWorkoutForm createWorkout={createWorkout} />
            {/* <WeekPlanner /> */}
        </div>
    );
}

export default Dashboard;
