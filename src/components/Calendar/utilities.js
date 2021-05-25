import uniqid from "uniqid";

export const buildWeekOne = (firstDayIndex, monthIndex, year) => {
    let date = 1;
    let weekOneArr = []
    for (let i = 0; i < 7; i++) {
        if ( i < firstDayIndex ){
            weekOneArr.push(<td key={uniqid()}></td>)
        } else if (i >= firstDayIndex){
            let fullDate = new Date(year, monthIndex, date)
            const dateFormatted = fullDate.toString().split('00')[0]
            weekOneArr.push(<td full-date={dateFormatted} key={uniqid()}>{date++}</td>)
        }
    }
    return {tableCells: weekOneArr, date}
}

export const buildMiddleWeek = (startDate, monthIndex, year) =>{
    let middleWeekArr = []
    for (let i = 0; i < 7; i++) {
        let fullDate = new Date(year, monthIndex, startDate)
        middleWeekArr.push(<td full-date={fullDate} key={uniqid()}>{startDate++}</td>)
    }
    return middleWeekArr
}

export const buildEndWeek = (startDate, monthIndex, year, totalDays) => {
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