import uniqid from "uniqid";
import Day from './Day';


export const buildWeekOne = (firstDayIndex, weekData) => {
    let date = 1;
    let weekOneArr = []
    for (let i = 0; i < 7; i++) {
        if ( i < firstDayIndex ){
            weekOneArr.push(<Day key={uniqid()} />)
        } else {
            weekData.selectedDate.setHours(19)
            //a question for chase - why is does this need to be before 20-8pm- for the correct day to appear? if its past 8pm it rounds to the next day?
            let fullDate = new Date(weekData.year, weekData.monthIndex, date).toISOString().split('T')[0]
            let dateStr =  weekData.selectedDate.toISOString().split('T')[0]
            if (fullDate === dateStr){
                weekOneArr.push(<Day workouts={weekData.workouts[fullDate]} date={date++} fullDate={fullDate} key={uniqid()} selectedDate={weekData.selectedDate}/>)
            } else {
                weekOneArr.push(<Day workouts={weekData.workouts[fullDate]} date={date++} fullDate={fullDate} key={uniqid()} />)
            }
        }
    }
    return {tableCells: weekOneArr, endDate: date}
}

export const buildMiddleWeek = (startDate, weekData) => {
    let middleWeekArr = []
    for (let i = 0; i < 7; i++) {
        weekData.selectedDate.setHours(19)
        let fullDate = new Date(weekData.year, weekData.monthIndex, startDate).toISOString().split('T')[0]
        let dateStr =  weekData.selectedDate.toISOString().split('T')[0]
        if (fullDate === dateStr){
            middleWeekArr.push(<Day workouts={weekData.workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()} selectedDate={weekData.selectedDate}/>)
        } else {
            middleWeekArr.push(<Day workouts={weekData.workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()} />)
        }
    }
    return middleWeekArr
}

export const buildEndWeek = (startDate, weekData, totalDays) => {
    let endWeekArr = []
    for (let i = 0; i < 7; i++) {
        if(startDate > totalDays) {
            endWeekArr.push(<Day key={uniqid()} />)
        } else {
            weekData.selectedDate.setHours(19)
            let fullDate = new Date(weekData.year, weekData.monthIndex, startDate).toISOString().split('T')[0]
            let dateStr =  weekData.selectedDate.toISOString().split('T')[0]
            if (fullDate === dateStr){
                endWeekArr.push(<Day workouts={weekData.workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()} selectedDate={weekData.selectedDate}/>)
            } else {
                endWeekArr.push(<Day workouts={weekData.workouts[fullDate]} date={startDate++} fullDate={fullDate} key={uniqid()}/>)
            }
        }
    }
    return endWeekArr
}