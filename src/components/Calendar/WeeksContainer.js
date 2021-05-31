import { useState, useEffect } from "react";
import { buildWeekOne, buildMiddleWeek, buildEndWeek } from "./utilities";

const WeeksContainer = ({ dayNames, workouts, firstDayIndex, totalDays, monthIndex, selectedDate, year }) => {
    const [firstWeek, setFirstWeek] = useState([])
    const [secondWeek, setSecondWeek] = useState([])
    const [thirdWeek, setThirdWeek] = useState([])
    const [fourthWeek, setFourthWeek] = useState([])
    const [fifthWeek, setFifthWeek] = useState([])
    const [sixthWeek, setSixthWeek] = useState([])

    useEffect(()=>{
        const initializeMonth = buildWeekOne(firstDayIndex, monthIndex, year, workouts, selectedDate)
    
        setFirstWeek(initializeMonth.tableCells)
        setSecondWeek(buildMiddleWeek(initializeMonth.date, monthIndex, year, workouts, selectedDate))
        setThirdWeek(buildMiddleWeek(initializeMonth.date+7, monthIndex, year, workouts, selectedDate))
        setFourthWeek(buildMiddleWeek(initializeMonth.date+14, monthIndex, year, workouts, selectedDate))
        setFifthWeek(buildEndWeek(initializeMonth.date+21, monthIndex, year, totalDays, workouts, selectedDate))
        if (initializeMonth.date+28 > totalDays) return
        setSixthWeek(buildEndWeek(initializeMonth.date+28, monthIndex, year, totalDays, workouts, selectedDate))

    }, [firstDayIndex, monthIndex, year, totalDays, workouts, selectedDate])
    return (
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
    );
};

export default WeeksContainer;

