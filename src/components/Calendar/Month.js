// import uniqid from "uniqid";
import { useEffect, useState } from "react";
import { buildWeekOne, buildMiddleWeek, buildEndWeek } from "./utilities";

const Month = ({ monthOriginDate, workouts }) => {
    const [firstWeek, setFirstWeek] = useState([])
    const [secondWeek, setSecondWeek] = useState([])
    const [thirdWeek, setThirdWeek] = useState([])
    const [fourthWeek, setFourthWeek] = useState([])
    const [fifthWeek, setFifthWeek] = useState([])
    const [sixthWeek, setSixthWeek] = useState([])

    const daysInMonth = (m, y) => {
        return new Date(y, m, 0).getDate();
    }

    const year = monthOriginDate.getFullYear();
    const monthIndex = monthOriginDate.getMonth();
    const totalDays = daysInMonth(monthIndex+1, year);
    const firstDayIndex = new Date(year, monthIndex).getDay();

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

    useEffect(()=>{
        const weekData = {
            monthIndex: monthIndex,
            year: year,
            today: new Date(),
            workouts: workouts
        }
        const initialWeek = buildWeekOne(firstDayIndex, weekData)
    
        setFirstWeek(initialWeek.tableCells)
        setSecondWeek(buildMiddleWeek(initialWeek.endDate, weekData))
        setThirdWeek(buildMiddleWeek(initialWeek.endDate+7, weekData))
        setFourthWeek(buildMiddleWeek(initialWeek.endDate+14, weekData))
        setFifthWeek(buildEndWeek(initialWeek.endDate+21, weekData, totalDays))
        
        if (initialWeek.endDate+28 > totalDays) return
        setSixthWeek(buildEndWeek(initialWeek.endDate+28, weekData, totalDays))
    }, [firstDayIndex, monthIndex, year, totalDays, workouts])

    // const headerText =( )=> {
    //     if 
    // }
    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return (
        <div className="month">
            <div className="month-header">
                <p>{monthLabels[monthOriginDate.getMonth()]}</p>
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

