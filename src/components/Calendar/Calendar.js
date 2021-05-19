import { useState } from "react";
// import "../stylesheets/workout.css";
import Month from './Month';

const Calendar = ({ activities }) => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);

    const fullMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const monthIndex = currentDate.getMonth();
    const monthFullName = fullMonths[monthIndex];

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(monthIndex - 1)));
    }
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(monthIndex + 1)));
    }
    return (
        <div className="calendar">
            <Month activities={activities} monthName={monthFullName} currentDate={currentDate}/>
            <button onClick={handleNextMonth}>next month</button>
            <button onClick={handlePrevMonth}>prev month</button>
        </div>
    );
};

export default Calendar;

