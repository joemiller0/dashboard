import { useState, useEffect } from "react";
import uniqid from "uniqid";

const WeeksContainer = ({ workouts, workoutDates, firstDayIndex, totalDays, monthIndex, currentDate, year }) => {
    const [firstWeek, setFirstWeek] = useState([])
    const [firstWeekEndDate, setFirstWeekEndDate] = useState(0)


    useEffect(()=>{
        let day = 1;
        let firstWeekArr = []
        for (let i = 0; i < 7; i++) {
            if ( i < firstDayIndex ){
                firstWeekArr.push(<td key={uniqid()}></td>)
            } else if (i >= firstDayIndex){
                let fullDate = new Date(year, monthIndex, day)
                firstWeekArr.push(<td full-date={fullDate} key={uniqid()}>{day++}</td>)
            }
        }
        setFirstWeek(<tr className="firstWeek">{firstWeekArr}</tr>)
        setFirstWeekEndDate(day-1)
    }, [firstDayIndex, monthIndex, year])
    
    return (
        <>
            {firstWeek}
        </>
    );
};

export default WeeksContainer;

