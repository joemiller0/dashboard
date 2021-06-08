import { useState, useEffect } from "react";
import Month from './Month';
import "../../stylesheets/calendar.css";

const Calendar = ({ activities }) => {
    const [workouts, setWorkouts] = useState({})
    const today = new Date();
    // const [selectedDate, setSelectedDate] = useState(today);
    
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

    const year = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    // is it better to pass these as props instead of redeclaring them in the lower components?

    return (
        <div className="calendar">
            <Month monthOriginDate={new Date(year, currentMonthIndex-1, 1)} workouts={workouts}/>
            <Month monthOriginDate={today} workouts={workouts}/>
            {/* <Month selectedDate={selectedDate} workouts={workouts}/> */}
        </div>
    );
};

export default Calendar;

