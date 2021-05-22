import { useState } from "react";
// import "../stylesheets/workout.css";
import Month from './Month';

const Calendar = ({ activities }) => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);

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
    const monthIndex = selectedDate.getMonth();
    const monthFullName = fullMonths[monthIndex];

    const handlePrevMonth = () => {
        setSelectedDate(new Date(selectedDate.setMonth(monthIndex - 1)));
    }
    const handleNextMonth = () => {
        setSelectedDate(new Date(selectedDate.setMonth(monthIndex + 1)));
    }
    return (
        <div className="calendar">
            <Month activities={activities} monthName={monthFullName} selectedDate={selectedDate}/>
            <button onClick={handlePrevMonth}>prev month</button>
            <button onClick={handleNextMonth}>next month</button>
        </div>
    );
};

export default Calendar;

