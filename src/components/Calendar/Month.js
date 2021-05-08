// import { useEffect, useState } from "react";
// import "../stylesheets/workout.css";
import Day from './Day';


const Month = ({ monthName, currentDate }) => {

    const fullDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayIndex = currentDate.getDay();
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    const dayNames = fullDays.map((day) => {
        return <th key={day}>{day}</th>;
    });

    const monthIndex = currentDate.getMonth();
    const firstDayIndex = new Date(year, monthIndex).getDay();

    //looking for a day component to populate in every square on the table, greyed out for past and future months in the first and last week of the calendar.
    //going to need to know about the last and next month to populate days correctly. 
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
                    
                </tbody>
            </table>
        </div>
    );
};

export default Month;

