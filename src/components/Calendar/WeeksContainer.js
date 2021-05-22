import { useState, useEffect } from "react";
import uniqid from "uniqid";

const WeeksContainer = ({ workouts, workoutDates, firstDayIndex, totalDays, monthIndex, selectedDate, year }) => {
    const [firstWeek, setFirstWeek] = useState([])
    const [secondWeek, setSecondWeek] = useState([])
    const [thirdWeek, setThirdWeek] = useState([])
    const [fourthWeek, setFourthWeek] = useState([])
    const [fifthWeek, setFifthWeek] = useState([])
    const [sixthWeek, setSixthWeek] = useState([])



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

        let secondWeekArr = []
        for (let i = 0; i < 7; i++) {
            let fullDate = new Date(year, monthIndex, day)
            secondWeekArr.push(<td full-date={fullDate} key={uniqid()}>{day++}</td>)
        }
        setSecondWeek(<tr className="secondWeek">{secondWeekArr}</tr>)

        let thirdWeekArr = []
        for (let i = 0; i < 7; i++) {
            let fullDate = new Date(year, monthIndex, day)
            thirdWeekArr.push(<td full-date={fullDate} key={uniqid()}>{day++}</td>)
        }
        setThirdWeek(<tr className="thirdWeek">{thirdWeekArr}</tr>)

        let fourthWeekArr = []
        for (let i = 0; i < 7; i++) {
            let fullDate = new Date(year, monthIndex, day)
            fourthWeekArr.push(<td full-date={fullDate} key={uniqid()}>{day++}</td>)
        }
        setFourthWeek(<tr className="fourthWeek">{fourthWeekArr}</tr>)

        let fifthWeekArr = []
        for (let i = 0; i < 7; i++) {
            if(day > totalDays) {
                fifthWeekArr.push(<td key={uniqid()}></td>)
            } else {
                let fullDate = new Date(year, monthIndex, day)
                fifthWeekArr.push(<td full-date={fullDate} key={uniqid()}>{day++}</td>)
            }
        }
        setFifthWeek(<tr className="fifthWeek">{fifthWeekArr}</tr>)

        let sixthWeekArr = []
        for (let i = 0; i < 7; i++) {
            if(day > totalDays) {
                sixthWeekArr.push(<td key={uniqid()}></td>)
            } else {
                let fullDate = new Date(year, monthIndex, day)
                sixthWeekArr.push(<td full-date={fullDate} key={uniqid()}>{day++}</td>)
            }
        }
        setSixthWeek(<tr className="sixthWeek">{sixthWeekArr}</tr>)


    }, [firstDayIndex, monthIndex, year, totalDays])
    
    return (
        <>
            {firstWeek}
            {secondWeek}
            {thirdWeek}
            {fourthWeek}
            {fifthWeek}
            {sixthWeek}
        </>
    );
};

export default WeeksContainer;

