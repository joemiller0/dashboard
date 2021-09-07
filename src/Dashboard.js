import { useState } from "react";
import Nav from './components/UI/Nav';
import CreateWorkoutForm from './components/Forms/CreateWorkoutForm.js';
import Calendar from './components/Calendar/Calendar';
import WorkoutList from './components/WorkoutList/WorkoutList';
import { useStravaData } from "./hooks/hooks";
import "./stylesheets/dashboard.css";
// import "./stylesheets/calendar.css";
// import WeekPlanner from './components/WeekPlanner/WeekPlanner';

const Dashboard = () => {
    const { stravaLogs, athlete } = useStravaData();
    const [formViewState, setFormViewState] = useState(false);
    const [workouts, setWorkouts] = useState([]);


    const workoutFormViewSwitch =(e)=> {
        setFormViewState(!formViewState)
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
                <WorkoutList workouts={workouts}/>
                <Calendar stravaLogs={stravaLogs} />
            </div>
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
