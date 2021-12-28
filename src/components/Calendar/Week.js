import { useEffect, useState } from "react";
import uniqid from "uniqid";
import { Day } from '../components.js';

export const Week = ({ monthOriginDate, startDate, totalDays, viewSwitch, logs}) => {
    const [week, setWeek] = useState([])
    // console.log(logs)
    useEffect(() => {
        const year = monthOriginDate.getFullYear();
        const monthIndex = monthOriginDate.getMonth();
        const weekData = {
            monthIndex: monthIndex,
            year: year,
            today: new Date(),
            logs: logs,
        };
        // console.log(weekData)

        let weekArr = [];
        for (let i = 0; i < 7; i++) {
            if (startDate > totalDays) {
                weekArr.push(<Day key={uniqid()} />);
            } else {
                // weekData.today.setHours(19); Daylight savings 
                let fullDate = new Date(weekData.year, weekData.monthIndex, startDate)
                    .toISOString()
                    .split("T")[0];
                let dateStr = weekData.today.toISOString().split("T")[0];
                weekArr.push(
                    <Day
                        viewSwitch={viewSwitch}
                        logs={weekData.logs[fullDate]}
                        date={startDate++}
                        fullDate={fullDate}
                        key={uniqid()}
                        isToday={fullDate === dateStr ? weekData.today : null}
                    />
                );
            }
        }
        setWeek(weekArr);
    }, [logs, monthOriginDate, startDate, totalDays, viewSwitch ])

    return(
        <tr>{week}</tr>
    )
};

