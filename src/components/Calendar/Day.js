const Day = ({ viewSwitch, workouts, date, fullDate, isToday }) => {
    return(
        <td valign="top" onClick={viewSwitch} className={isToday ? "today" : workouts ? "hasWorkout" : "day"} fulldate={fullDate}>{date}</td>
    )
};

export default Day;

