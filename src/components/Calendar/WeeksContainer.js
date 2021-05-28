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
        const initializeMonth = buildWeekOne(firstDayIndex, monthIndex, year, workouts)
    
        setFirstWeek(initializeMonth.tableCells)
        setSecondWeek(buildMiddleWeek(initializeMonth.date, monthIndex, year, workouts))
        setThirdWeek(buildMiddleWeek(initializeMonth.date+7, monthIndex, year, workouts))
        setFourthWeek(buildMiddleWeek(initializeMonth.date+14, monthIndex, year, workouts))
        setFifthWeek(buildEndWeek(initializeMonth.date+21, monthIndex, year, totalDays, workouts))
        setSixthWeek(buildEndWeek(initializeMonth.date+28, monthIndex, year, totalDays, workouts))

    }, [firstDayIndex, monthIndex, year, totalDays, workouts])
    
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

