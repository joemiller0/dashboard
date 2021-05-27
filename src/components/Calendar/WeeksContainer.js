import { useState, useEffect } from "react";
import { buildWeekOne, buildMiddleWeek, buildEndWeek } from "./utilities";

const WeeksContainer = ({ dayNames, workouts, workoutDates, firstDayIndex, totalDays, monthIndex, selectedDate, year }) => {
    const [firstWeek, setFirstWeek] = useState([])
    const [secondWeek, setSecondWeek] = useState([])
    const [thirdWeek, setThirdWeek] = useState([])
    const [fourthWeek, setFourthWeek] = useState([])
    const [fifthWeek, setFifthWeek] = useState([])
    const [sixthWeek, setSixthWeek] = useState([])

    useEffect(()=>{
        const initializeMonth = buildWeekOne(firstDayIndex, monthIndex, year)

        setFirstWeek(initializeMonth.tableCells)
        setSecondWeek(buildMiddleWeek(initializeMonth.date, monthIndex, year))
        setThirdWeek(buildMiddleWeek(initializeMonth.date+7, monthIndex, year))
        setFourthWeek(buildMiddleWeek(initializeMonth.date+14, monthIndex, year))
        setFifthWeek(buildEndWeek(initializeMonth.date+21, monthIndex, year, totalDays))
        setSixthWeek(buildEndWeek(initializeMonth.date+28, monthIndex, year, totalDays))
    }, [firstDayIndex, monthIndex, year, totalDays])
    
    return (
        <table>
            <thead>
                <tr>{dayNames}</tr>
            </thead>
            <tbody>
                <tr className="firstWeek">
                    {firstWeek}
                </tr>
                <tr className="secondWeek">
                    {secondWeek}
                </tr>
                <tr className="thirdWeek">
                    {thirdWeek}
                </tr>
                <tr className="fourthWeek">
                    {fourthWeek}
                </tr>
                <tr className="fifthWeek">
                    {fifthWeek}
                </tr>
                <tr className="sixthWeek">
                    {sixthWeek}
                </tr>
            </tbody>
        </table>
    );
};

export default WeeksContainer;

