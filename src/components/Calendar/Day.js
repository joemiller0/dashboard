const Day = ({ viewSwitch, stravaLogs, date, fullDate, isToday }) => {
    return(
        <td valign="top" onClick={viewSwitch} className={isToday ? "today" : stravaLogs ? "hasWorkout" : "day"} fulldate={fullDate}>{date}</td>
    )
};

export default Day;

