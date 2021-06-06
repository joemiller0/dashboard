import uniqid from "uniqid";
import Day from './Day';


export const buildWeekOne = (firstDayIndex, monthIndex, year, workouts, selectedDate) => {
    let date = 1;
    let weekOneArr = []
    for (let i = 0; i < 7; i++) {
        if ( i < firstDayIndex ){
            weekOneArr.push(<Day key={uniqid()} />)
        } else {
            selectedDate.setHours(19)
            //if the hour is past 20, or 10pm the selected day appears as tthe next day, this is to avoid that. 
            let fullDate = new Date(year, monthIndex, date).toISOString().split('T')[0]
            let dateStr =  selectedDate.toISOString().split('T')[0]
            if (fullDate === dateStr){
                weekOneArr.push(<Day workouts={workouts[fullDate]} date={date++} fullDate={fullDate} key={uniqid()} selectedDate={selectedDate}/>)
                console.log(selectedDate)
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
        selectedDate.setHours(19)
        let fullDate = new Date(year, monthIndex, startDate).toISOString().split('T')[0]
        let dateStr =  selectedDate.toISOString().split('T')[0]
        if (fullDate === dateStr){
            middleWeekArr.push(<Day workouts={workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()} selectedDate={selectedDate}/>)
        } else {
            middleWeekArr.push(<Day workouts={workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()} />)
        }
    }
    return middleWeekArr
}

export const buildEndWeek = (startDate, monthIndex, year, totalDays, workouts, selectedDate) => {
    let endWeekArr = []
    for (let i = 0; i < 7; i++) {
        if(startDate > totalDays) {
            endWeekArr.push(<Day key={uniqid()} />)
        } else {
            selectedDate.setHours(19)
            let fullDate = new Date(year, monthIndex, startDate).toISOString().split('T')[0]
            let dateStr =  selectedDate.toISOString().split('T')[0]
            if (fullDate === dateStr){
                endWeekArr.push(<Day workouts={workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()} selectedDate={selectedDate}/>)
            } else {
                endWeekArr.push(<Day workouts={workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()}/>)
            }
        }
    }
    return endWeekArr
}