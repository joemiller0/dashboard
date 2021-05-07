// import { useEffect, useState } from "react";
// import "../stylesheets/workout.css";

const Workout = ({ workoutArr, date }) => {

    console.log(date)
    console.log(workoutArr)

    return (
        <div className="workout">
            <div className="workout-header">
                <p className="workout-start-date">{date}</p>
            </div>
            
                {workoutArr.map(workout => {
                    return <p key={workout.id}>{workout.name}</p>
                })}
            
        </div>
    );
};

export default Workout;
