import { useState, useEffect } from "react";
import Month from './Month';
import "../../stylesheets/calendar.css";

const Calendar = ({ activities }) => {
    const [workouts, setWorkouts] = useState({})
    
    useEffect(() => {
        if (!activities || !activities.length) return
        
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
    }, [activities]);
    
    const today = new Date();
    const year = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    // is it better to pass these as props instead of redeclaring them in the lower components?

    return (
        <div className="calendar">
            <h5>{year}</h5>
            <Month monthOriginDate={new Date(year, currentMonthIndex-1, 1)} workouts={workouts}/>
            <Month monthOriginDate={today} workouts={workouts}/>
            <Month monthOriginDate={new Date(year, currentMonthIndex+1, 1)} workouts={workouts}/>
        </div>
    );
};

export default Calendar;

