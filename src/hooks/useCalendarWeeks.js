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
        return weekOneArr
    }

    const middleWeek = (startDate, monthIndex, year) =>{
        let middleWeekArr = []
        for (let i = 0; i < 7; i++) {
            let fullDate = new Date(year, monthIndex, startDate)
            middleWeekArr.push(<td full-date={fullDate} key={uniqid()}>{startDate++}</td>)
        }
        return middleWeekArr
    }


    
    return {
        weekOne, 
        middleWeek
    };
}

export { useCalendarWeeks };