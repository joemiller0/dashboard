import { useEffect, useState } from "react";
import Workout from './Workout';
import uniqid from "uniqid";
import "../../stylesheets/workoutList.css";

const WorkoutList = ({ workouts, dates }) => {

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
