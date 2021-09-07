import "../../stylesheets/weekplanner.css";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import TimeSlot from './TimeSlot';

const WeekPlanner = ({workouts}) => {
    const [amWorkouts, setAMWorkouts] = useState([]);
    const [lunchWorkouts, setLunchWorkouts] = useState([]);
    const [pmWorkouts, setPMWorkouts] = useState([]);

        useEffect(()=>{
            // if (!workouts) return

            workouts.map((w)=>{
                if(w.time ==='am'){
                    setAMWorkouts(w)
                }
                if(w.time ==='lunch'){
                    setLunchWorkouts(w)
                }
                if(w.time ==='pm'){
                    setPMWorkouts(w)
                }

                // these are going to be arrays of TimeSlots, maybe better to think of them as rows.
                // will need to insert at a partiuclar index based on day and fill in slots with empty timeslots  

            })

        }, [workouts])

        console.log(`${amWorkouts} AM`)
        console.log(`${lunchWorkouts} Lunch`)
        console.log(`${pmWorkouts} PM`)


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
                        <tr><td>am</td></tr>
                        <tr><td>lunch</td></tr>
                        <tr><td>pm</td></tr>
                    </tbody>
                </table>

        </div>
    )
};

export default WeekPlanner;