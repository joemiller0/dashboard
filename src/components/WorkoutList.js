import { useEffect, useState } from "react";
import "../stylesheets/workout.css";

const WorkoutList = ({ activities }) => {
const [workouts, setWorkouts] = useState({})

    // let whoop = [];
    // let strava = [];

    // activities.forEach((a) => {
    //     if (a.name[0] === "W") {
    //         whoop.push(a);
    //     } else {
    //         strava.push(a);
    //     }
    // });
    


    useEffect(() => {
        let workoutsObj = {}
        activities.forEach((workout)=>{
            const date = workout.start_date.split('T')[0];
            if(workoutsObj[date] === null){
                workoutsObj[date].push(workout)
            } else {
                workoutsObj[date] = [workout]
            }
        })
        setWorkouts(workoutsObj)
    }, [activities]);


console.log(workouts)
    return (
        
        <div className="workout-container">

        </div>
    );
};

export default WorkoutList;
