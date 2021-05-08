import { useEffect, useState } from "react";
import Workout from './Workout';
import uniqid from "uniqid";
import "../stylesheets/workout.css";

const WorkoutList = ({ activities }) => {
    const [workouts, setWorkouts] = useState({})
    const [dates, setDates] = useState([])

    useEffect(() => {
        let workoutsObj = {}
        activities.forEach((workout) => {
            const date = workout.start_date_local.split('T')[0];
            if (!workoutsObj[date]) {
                workoutsObj[date] = [workout]
            } else {
                workoutsObj[date].push(workout)
            }
        })
        setWorkouts(workoutsObj)
        setDates(Object.keys(workoutsObj))
    }, [activities]);

    const renderWorkouts = () => {
        return dates.map(date => {
            return <Workout workoutArr={workouts[date]} date={date} key={uniqid()} />
        })
    }

    return (
        <div className="workout-container">
            {renderWorkouts()}
        </div>
    );
};

export default WorkoutList;
