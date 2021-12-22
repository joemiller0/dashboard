export const Day = ({ viewSwitch, logs, date, fullDate, isToday }) => {
    return(
        <td 
            valign="top" 
            onClick={logs ? viewSwitch : null}
            className={isToday ? "today" : logs ? "log-present" : "day"} 
            fulldate={fullDate}
            >{date}
        </td>
    )
};

