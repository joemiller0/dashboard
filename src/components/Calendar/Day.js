const Day = ({ showWorkout, workouts, date, fullDate, isToday }) => {
    return(
        <td valign="top" onClick={showWorkout} className={isToday ? "today" : workouts ? "hasWorkout" : "day"} fulldate={fullDate}>{date}</td>
    )
};

export default Day;

