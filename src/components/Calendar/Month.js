import { useEffect, useState } from "react";
import uniqid from "uniqid";
import WeeksContainer from './WeeksContainer';

const Month = ({ activities, monthName, selectedDate }) => {
    const [workouts, setWorkouts] = useState({})

    useEffect(() => {
        if (!activities || !activities.length) return
        
        let workoutsObj = {}
        // debugger
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

    const fullDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }
    const dayNames = fullDays.map(day => {
        return <th key={day}>{day}</th>;
    });

    const dayIndex = selectedDate.getDay();
    const monthIndex = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const firstDayIndex = new Date(year, monthIndex).getDay();
    const totalDays = daysInMonth(monthIndex+1, year);
    
    return (
        <div className="month">
            <h3>{monthName} {year}</h3>
            <p>{fullDays[dayIndex]}</p>
            <p>{selectedDate.toString()}</p>
            <WeeksContainer 
                key={uniqid()} 
                dayNames={dayNames}
                workouts={workouts} 
                firstDayIndex={firstDayIndex}
                totalDays={totalDays}
                monthIndex={monthIndex}
                selectedDate={selectedDate}
                year={year}
            />
        </div>
    );
};

export default Month;

