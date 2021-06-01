import uniqid from "uniqid";
import Day from './Day';


export const buildWeekOne = (firstDayIndex, monthIndex, year, workouts, selectedDate) => {
    let date = 1;
    let weekOneArr = []
    for (let i = 0; i < 7; i++) {
        if ( i < firstDayIndex ){
            weekOneArr.push(<Day key={uniqid()} />)
        } else {
            let fullDate = new Date(year, monthIndex, date).toISOString().split('T')[0]
            if (fullDate === selectedDate.toISOString().split('T')[0]){
                weekOneArr.push(<Day workouts={workouts[fullDate]} date={date++} fullDate={fullDate} key={uniqid()} selectedDate={selectedDate}/>)
            } else {
                weekOneArr.push(<Day workouts={workouts[fullDate]} date={date++} fullDate={fullDate} key={uniqid()} />)
            }
        }
    }
    return {tableCells: weekOneArr, date}
}

export const buildMiddleWeek = (startDate, monthIndex, year, workouts, selectedDate) => {
    let middleWeekArr = []
    for (let i = 0; i < 7; i++) {
        let fullDate = new Date(year, monthIndex, startDate).toISOString().split('T')[0]
        middleWeekArr.push(<Day workouts={workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()}/>)
    }
    return middleWeekArr
}

export const buildEndWeek = (startDate, monthIndex, year, totalDays, workouts, selectedDate) => {
    let endWeekArr = []
    for (let i = 0; i < 7; i++) {
        if(startDate > totalDays) {
            endWeekArr.push(<Day key={uniqid()} />)
        } else {
            let fullDate = new Date(year, monthIndex, startDate).toISOString().split('T')[0]
            if (fullDate === selectedDate.toISOString().split('T')[0]){
                endWeekArr.push(<Day workouts={workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()} selectedDate={selectedDate}/>)
            } else {
                endWeekArr.push(<Day workouts={workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()}/>)
            }
        }
    }
    return endWeekArr
}