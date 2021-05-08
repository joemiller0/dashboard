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
                    return (
                        <div key={workout.id}>
                            <p>{workout.name}</p>
                            <p>suffer score: {workout.suffer_score}</p>
                        </div>
                    )
                })}
            
        </div>
    );
};

export default Workout;

// get the runs looking cool and put everything on a calendar. 