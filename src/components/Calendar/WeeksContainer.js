import { useState, useEffect } from "react";
import { weekOne, middleWeek, endWeek } from "./utilities";

const WeeksContainer = ({ dayNames, workouts, workoutDates, firstDayIndex, totalDays, monthIndex, selectedDate, year }) => {
    const [firstWeek, setFirstWeek] = useState([])
    const [secondWeek, setSecondWeek] = useState([])
    const [thirdWeek, setThirdWeek] = useState([])
    const [fourthWeek, setFourthWeek] = useState([])
    const [fifthWeek, setFifthWeek] = useState([])
    const [sixthWeek, setSixthWeek] = useState([])

    useEffect(()=>{
        // Didn't know what to name this, weekOne is a bad name as I have no idea what it does
        // Rememeber, I'm not chase I'm some guy who might want to hire you
        const standardWeekRoutine = weekOne(firstDayIndex, monthIndex, year)

        setFirstWeek(standardWeekRoutine.tableCells)
        setSecondWeek(middleWeek(standardWeekRoutine.day, monthIndex, year))
        setThirdWeek(middleWeek(standardWeekRoutine.day+7, monthIndex, year))
        setFourthWeek(middleWeek(standardWeekRoutine.day+14, monthIndex, year))
        setFifthWeek(endWeek(standardWeekRoutine.day+21, monthIndex, year, totalDays))
        setSixthWeek(endWeek(standardWeekRoutine.day+28, monthIndex, year, totalDays))
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

