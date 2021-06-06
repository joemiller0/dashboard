import { useEffect, useState } from "react";
import uniqid from "uniqid";
import WeeksContainer from './WeeksContainer';

const Month = ({ activities }) => {
    const today = new Date();
    const [workouts, setWorkouts] = useState({})
    const [selectedDate, setSelectedDate] = useState(today);
    const abrevDays = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];
    const dayNames = abrevDays.map(day => {
        return <th key={day}>{day}</th>;
    });
    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }
    const monthIndex = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const firstDayIndex = new Date(year, monthIndex).getDay();
    const totalDays = daysInMonth(monthIndex+1, year);

    const handlePrevMonth = () => {
        setSelectedDate(new Date(selectedDate.setMonth(monthIndex - 1)));
    }
    const handleNextMonth = () => {
        setSelectedDate(new Date(selectedDate.setMonth(monthIndex + 1)));
    }

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

    
    return (
        <div className="month">
            <div className="month-header">
                <h3>{selectedDate.toDateString()}</h3>
            </div>
            <button onClick={handlePrevMonth}>prev</button>
            <button onClick={handleNextMonth}>next</button>
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

