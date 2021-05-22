import { useEffect, useState } from "react";
import uniqid from "uniqid";
import WeeksContainer from './WeeksContainer';

const Month = ({ activities, monthName, selectedDate }) => {
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
    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }
    const dayNames = fullDays.map(day => {
        return <th key={day}>{day}</th>;
    });
    // const date = selectedDate.getDate();
    const dayIndex = selectedDate.getDay();
    const monthIndex = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const firstDayIndex = new Date(year, monthIndex).getDay();
    const totalDays = daysInMonth(monthIndex+1, year);

    //looking for a day component to populate in every square on the table
    //each day should have its own full date and be mapped correctly to that space on the calendar.
    
    return (
        <div className="month">
            <h3>{monthName} {year}</h3>
            <p>{fullDays[dayIndex]}</p>
            <table>
                <thead>
                    <tr>{dayNames}</tr>
                </thead>
                <tbody>
                    <WeeksContainer 
                        key={uniqid()} 
                        workouts={workouts} 
                        workoutDates={workoutDates} 
                        firstDayIndex={firstDayIndex}
                        totalDays={totalDays}
                        monthIndex={monthIndex}
                        selectedDate={selectedDate}
                        year={year}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default Month;

