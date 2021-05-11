import { useState } from "react";
// import "../stylesheets/workout.css";
import uniqid from "uniqid";

const WeeksContainer = ({workouts, workoutDates, firstDayIndex, totalDays, monthIndex, currentDate, year}) => {

    const firstWeek = () => {
        let day = 1;
        let firstWeekArr = []
        for (let i = 0; i < 7; i++) {
            if ( i < firstDayIndex ){
                firstWeekArr.push(<td key={uniqid()}></td>)
            } else if (i >= firstDayIndex){
                firstWeekArr.push(<td key={uniqid()}>{day++}</td>)
            }
        }
        return <tr className="firstWeek">{firstWeekArr}</tr>
    }

    return (
        <>
            {firstWeek()}
        </>
    );
};

export default WeeksContainer;

