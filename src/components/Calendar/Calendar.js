import { useState, useEffect } from "react";
import Month from './Month';
import "../../stylesheets/calendar.css";

const Calendar = ({ activities }) => {
    const today = new Date();
    const [workouts, setWorkouts] = useState({})
    const [selectedDate, setSelectedDate] = useState(today);
    
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
    
    
    
    
    // goal to have a four month calendar view that shows the length of a program
    return (
        <div className="calendar">
            <Month selectedDate={selectedDate} workouts={workouts}/>
        </div>
    );
};

export default Calendar;

