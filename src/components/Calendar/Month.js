// import uniqid from "uniqid";
import { useEffect, useState } from "react";
import { buildWeekOne, buildMiddleWeek, buildEndWeek } from "./utilities";

const Month = ({ selectedDate, workouts }) => {
    const [firstWeek, setFirstWeek] = useState([])
    const [secondWeek, setSecondWeek] = useState([])
    const [thirdWeek, setThirdWeek] = useState([])
    const [fourthWeek, setFourthWeek] = useState([])
    const [fifthWeek, setFifthWeek] = useState([])
    const [sixthWeek, setSixthWeek] = useState([])

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

    useEffect(()=>{
        const weekData = buildWeekOne(firstDayIndex, monthIndex, year, workouts, selectedDate)
    
        setFirstWeek(weekData.tableCells)
        setSecondWeek(buildMiddleWeek(weekData.date, monthIndex, year, workouts, selectedDate))
        setThirdWeek(buildMiddleWeek(weekData.date+7, monthIndex, year, workouts, selectedDate))
        setFourthWeek(buildMiddleWeek(weekData.date+14, monthIndex, year, workouts, selectedDate))
        setFifthWeek(buildEndWeek(weekData.date+21, monthIndex, year, totalDays, workouts, selectedDate))
        
        if (weekData.date+28 > totalDays) return
        setSixthWeek(buildEndWeek(weekData.date+28, monthIndex, year, totalDays, workouts, selectedDate))

    }, [firstDayIndex, monthIndex, year, totalDays, workouts, selectedDate])
    
    return (
        <div className="month">
            <div className="month-header">
                <h3>{selectedDate.toDateString()}</h3>
            </div>
            <table>
                <thead>
                    <tr>{dayNames}</tr>
                </thead>
                <tbody>
                    <tr>
                        {firstWeek}
                    </tr>
                    <tr>
                        {secondWeek}
                    </tr>
                    <tr>
                        {thirdWeek}
                    </tr>
                    <tr>
                        {fourthWeek}
                    </tr>
                    <tr>
                        {fifthWeek}
                    </tr>
                    <tr>
                        {sixthWeek}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Month;

