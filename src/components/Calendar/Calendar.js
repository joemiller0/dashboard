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

    return (
        <div className="calendar">
            <Month activities={activities} monthName={monthFullName} currentDate={currentDate}/>
        </div>
    );
};

export default Calendar;

