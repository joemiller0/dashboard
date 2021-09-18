import "../../stylesheets/weekplanner.css";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import AmWorkoutRow from './AmWorkoutRow';
import LunchWorkoutRow from './LunchWorkoutRow';
import PmWorkoutRow from './PmWorkoutRow';


const WeekPlanner = ({workouts}) => {
    const [amWorkouts, setAMWorkouts] = useState([]);
    const [lunchWorkouts, setLunchWorkouts] = useState([]);
    const [pmWorkouts, setPMWorkouts] = useState([]);

        useEffect(()=>{
            const am =[];
            const lunch = []
            const pm = []
            workouts.map((w)=>{
                if(w.time ==='am'){
                    am.push()
                    setAMWorkouts(am)
                }
                if(w.time ==='lunch'){ 
                    lunch.push(w)
                    setLunchWorkouts(lunch)
                }
                if(w.time ==='pm'){
                    pm.push(w)
                    setPMWorkouts(pm)
                }
                return null;
                // these are going to be arrays of TimeSlots, maybe better to think of them as rows.
                // will need to insert at a partiuclar index based on day and fill in slots with empty timeslots  

            })


        }, [workouts])


        console.log(amWorkouts)
        // console.log(lunchWorkouts)
        // console.log(pmWorkouts)
        console.log(workouts)
    const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayNames = abrevDays.map((day) => {
        return <td key={day}>{day}</td>;
    });

    return (
        <div className="weekPlanner-container">
            <h3>Current Weekly Schedule</h3>
                <table className="weekPlanner">
                    <thead>
                        <tr>
                            <td></td>{dayNames}
                        </tr>
                    </thead>
                    <tbody>
                        <AmWorkoutRow workouts={amWorkouts}/>
                        <LunchWorkoutRow workouts={lunchWorkouts} />
                        <PmWorkoutRow workouts={pmWorkouts} />

                        {/* combining the repeated logic in these componenets might just be a larger compoent which returns <tbody></tbody> elemtn entirely */}
                    </tbody>
                </table>

        </div>
    )
};

export default WeekPlanner;