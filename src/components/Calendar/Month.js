import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Week from './Week';

const Month = ({ activities, monthName, currentDate }) => {
    const [workouts, setWorkouts] = useState({})
    const [workoutDates, setWorkoutDates] = useState([])

    useEffect(() => {
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
        setWorkoutDates(Object.keys(workoutsObj))
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
    // const date = currentDate.getDate();
    const dayIndex = currentDate.getDay();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDayIndex = new Date(year, monthIndex).getDay();

    
    
    //looking for a day component to populate in every square on the table
    //going to need to know about the last and next month to populate days correctly. 
    //each day should have its own full date and be mapped correctly to that space on the calendar.
    
    const dayNames = fullDays.map(day => {
        return <th key={day}>{day}</th>;
    });
    return (
        <div className="month">
            <h3>{monthName} {year}</h3>
            <p>{fullDays[dayIndex]}</p>
            <table>
                <thead>
                    <tr>{dayNames}</tr>
                </thead>
                <tbody>
                    
                    <Week key={uniqid()} workouts={workouts} workoutDates={workoutDates} firstDayIndex={firstDayIndex}/>
                
                </tbody>
            </table>
        </div>
    );
};

export default Month;

