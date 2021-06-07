// import { useEffect, useState } from "react";
import uniqid from "uniqid";
import WeeksContainer from './WeeksContainer';

const Month = ({ selectedDate, workouts }) => {

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
    const totalDays = daysInMonth(monthIndex+1, year);
    const firstDayIndex = new Date(year, monthIndex).getDay();

    return (
        <div className="month">
            <div className="month-header">
                <h3>{selectedDate.toDateString()}</h3>
            </div>
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

