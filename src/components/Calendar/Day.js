const Day = ({ viewSwitch, logs, date, fullDate, isToday }) => {
    return(
        <td valign="top" onClick={viewSwitch} className={isToday ? "today" : logs ? "hasWorkout" : "day"} fulldate={fullDate}>{date}</td>
    )
};

export default Day;

