import { useState } from "react";
import Nav from './components/UI/Nav';
import CreateWorkoutForm from './components/Forms/CreateWorkoutForm.js';
import Calendar from './components/Calendar/Calendar';
import WorkoutList from './components/WorkoutList/WorkoutList';
import { useApiData } from "./hooks/hooks";
import "./stylesheets/dashboard.css";
// import "./stylesheets/calendar.css";
import WeekPlanner from './components/WeekPlanner/WeekPlanner';

const Dashboard = () => {
    const { logs, athlete } = useApiData();
    console.log(logs)
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

                <Calendar logs={logs} />
            <div className="inner-dash">
                <WorkoutList workouts={workouts}/>
                <WeekPlanner workouts={workouts}/>
            </div>

            {formViewState === true &&
                <div>
                    <div onClick={workoutFormViewSwitch} className="dimmed-bg" />
                    <CreateWorkoutForm workoutFormViewSwitch={workoutFormViewSwitch} createWorkout={createWorkout} />
                </div>
            }
        </div>
    );
}

export default Dashboard;
