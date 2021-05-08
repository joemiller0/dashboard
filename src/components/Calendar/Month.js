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

    return (
        <div className="month">
            <h3>{monthName} {year}</h3>
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

