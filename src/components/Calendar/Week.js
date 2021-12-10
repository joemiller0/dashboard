import { useCallback, useEffect, useState } from "react";
import uniqid from "uniqid";
import Day from "./Day";

const Week = ({ monthOriginDate, startDate, viewSwitch, logs}) => {
    const [week, setWeek] = useState([])
    const [weekData, setWeekData] = useState({})
    

    useEffect(() => {
        // Calendar utilities

        const daysInMonth = (m, y) => {
            return new Date(y, m, 0).getDate();
        };
        const year = monthOriginDate.getFullYear();
        const monthIndex = monthOriginDate.getMonth();
        // const totalDays = daysInMonth(monthIndex + 1, year);
        // const firstDayIndex = new Date(year, monthIndex).getDay();

        const weekData = {
            monthIndex: monthIndex,
            year: year,
            today: new Date(),
            logs: logs,
        };
        // setWeekData(wData)
        console.log(weekData)
        let middleWeekArr = [];
        for (let i = 0; i < 7; i++) {
            // weekData.today.setHours(19); Daylight savings 
            let fullDate = new Date(weekData.year, weekData.monthIndex, startDate)
                .toISOString()
                .split("T")[0];
            let dateStr = weekData.today.toISOString().split("T")[0];
            middleWeekArr.push(
                <Day
                    viewSwitch={viewSwitch}
                    logs={weekData.logs[fullDate]}
                    date={startDate++}
                    fullDate={fullDate}
                    key={uniqid()}
                    isToday={fullDate === dateStr ? weekData.today : undefined}
                />
            );
        }
        setWeek(middleWeekArr);


    }, [logs, monthOriginDate, startDate, viewSwitch ])

    return(
        <tr>{week}</tr>
    )
};

export default Week;

