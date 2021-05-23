import { useState } from "react";
import uniqid from "uniqid";


function useCalendarWeeks() {

    const weekOne = (firstDayIndex, monthIndex, year) => {
        let day = 1;
        let weekOneArr = []
        for (let i = 0; i < 7; i++) {
            if ( i < firstDayIndex ){
                weekOneArr.push(<td key={uniqid()}></td>)
            } else if (i >= firstDayIndex){
                let fullDate = new Date(year, monthIndex, day)
                const dateFormatted = fullDate.toString().split('00')[0]
                weekOneArr.push(<td full-date={dateFormatted} key={uniqid()}>{day++}</td>)
            }
        }
        return [weekOneArr, day]
    }

    const middleWeek = (startDate, monthIndex, year) =>{
        let middleWeekArr = []
        for (let i = 0; i < 7; i++) {
            let fullDate = new Date(year, monthIndex, startDate)
            middleWeekArr.push(<td full-date={fullDate} key={uniqid()}>{startDate++}</td>)
        }
        return middleWeekArr
    }

    const endWeek = (startDate, monthIndex, year, totalDays) => {
        let endWeekArr = []
        for (let i = 0; i < 7; i++) {
            if(startDate > totalDays) {
                endWeekArr.push(<td key={uniqid()}></td>)
            } else {
                let fullDate = new Date(year, monthIndex, startDate)
                endWeekArr.push(<td full-date={fullDate} key={uniqid()}>{startDate++}</td>)
            }
        }
        return endWeekArr
    }


    
    return {
        weekOne, 
        middleWeek, 
        endWeek
    };
}

export { useCalendarWeeks };