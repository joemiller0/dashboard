import { useState, useEffect } from "react";
import uniqid from "uniqid";
import { useCalendarWeeks } from "../../hooks/useCalendarWeeks";

const WeeksContainer = ({ workouts, workoutDates, firstDayIndex, totalDays, monthIndex, selectedDate, year }) => {
    const [firstWeek, setFirstWeek] = useState([])
    const [secondWeek, setSecondWeek] = useState([])
    const [thirdWeek, setThirdWeek] = useState([])
    const [fourthWeek, setFourthWeek] = useState([])
    const [fifthWeek, setFifthWeek] = useState([])
    const [sixthWeek, setSixthWeek] = useState([])

    const { weekOne, middleWeek } = useCalendarWeeks();
    useEffect(()=>{
        setFirstWeek(<tr className="firstWeek">{weekOne(firstDayIndex, monthIndex, year)}</tr>)

    }, [firstDayIndex, monthIndex, year])




    // useEffect(()=>{
    
    //     let day = 1;
    //     let firstWeekArr = []
    //     for (let i = 0; i < 7; i++) {
    //         if ( i < firstDayIndex ){
    //             firstWeekArr.push(<td key={uniqid()}></td>)
    //         } else if (i >= firstDayIndex){
    //             let fullDate = new Date(year, monthIndex, day)
    //             const dateFormatted = fullDate.toString().split('00')[0]
    //             firstWeekArr.push(<td full-date={dateFormatted} key={uniqid()}>{day++}</td>)
    //         }
    //     }
    //     setFirstWeek(<tr className="firstWeek">{firstWeekArr}</tr>)

    //     let secondWeekArr = []
    //     let weekTwoStartDate = firstWeekArr[firstWeekArr.length-1].props.children + 1
    //     for (let i = 0; i < 7; i++) {
    //         let fullDate = new Date(year, monthIndex, weekTwoStartDate)
    //         secondWeekArr.push(<td full-date={fullDate} key={uniqid()}>{weekTwoStartDate++}</td>)
    //     }
    //     setSecondWeek(<tr className="secondWeek">{secondWeekArr}</tr>)

    //     let thirdWeekArr = []
    //     let weekThreeStartDate = secondWeekArr[secondWeekArr.length-1].props.children + 1
    //     for (let i = 0; i < 7; i++) {
    //         let fullDate = new Date(year, monthIndex, weekThreeStartDate)
    //         thirdWeekArr.push(<td full-date={fullDate} key={uniqid()}>{weekThreeStartDate++}</td>)
    //     }
    //     setThirdWeek(<tr className="thirdWeek">{thirdWeekArr}</tr>)

    //     let fourthWeekArr = []
    //     let weekFourStartDate = thirdWeekArr[thirdWeekArr.length-1].props.children + 1
    //     for (let i = 0; i < 7; i++) {
    //         let fullDate = new Date(year, monthIndex, weekFourStartDate)
    //         fourthWeekArr.push(<td full-date={fullDate} key={uniqid()}>{weekFourStartDate++}</td>)
    //     }
    //     setFourthWeek(<tr className="fourthWeek">{fourthWeekArr}</tr>)

    //     let fifthWeekArr = []
    //     let weekFiveStartDate = fourthWeekArr[fourthWeekArr.length-1].props.children + 1
    //     for (let i = 0; i < 7; i++) {
    //         if(day > totalDays) {
    //             fifthWeekArr.push(<td key={uniqid()}></td>)
    //         } else {
    //             let fullDate = new Date(year, monthIndex, weekFiveStartDate)
    //             fifthWeekArr.push(<td full-date={fullDate} key={uniqid()}>{weekFiveStartDate++}</td>)
    //         }
    //     }
    //     setFifthWeek(<tr className="fifthWeek">{fifthWeekArr}</tr>)

    //     let sixthWeekArr = []
    //     let weekSixStartDate = fifthWeekArr[fifthWeekArr.length-1].props.children + 1
    //     for (let i = 0; i < 7; i++) {
    //         if(day > totalDays) {
    //             sixthWeekArr.push(<td key={uniqid()}></td>)
    //         } else {
    //             let fullDate = new Date(year, monthIndex, weekSixStartDate)
    //             sixthWeekArr.push(<td full-date={fullDate} key={uniqid()}>{weekSixStartDate++}</td>)
    //         }
    //     }
    //     setSixthWeek(<tr className="sixthWeek">{sixthWeekArr}</tr>)


    // }, [firstDayIndex, monthIndex, year, totalDays])
    
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

