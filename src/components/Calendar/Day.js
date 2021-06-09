const Day = ({ date, fullDate, workouts, isToday }) => {
    return(
        <td valign="top" className={isToday ? "today" : workouts ? "hasWorkout" : "day"} full-date={fullDate}>{date}</td>
    )
};

export default Day;

