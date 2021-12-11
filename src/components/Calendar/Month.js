import { useCallback, useEffect, useState } from "react";
import uniqid from "uniqid";
import Week from "./Week";
import Day from "./Day";

const Month = ({ viewSwitch, monthOriginDate, logs }) => {
    const [firstWeek, setFirstWeek] = useState([]);
    const [initialWeekEndDate, setInitialWeekEndDate] = useState(0);

// console.log(logs)
// ===========Calendar Utilities=====================================================================================
    const buildWeekOne = useCallback(
        (firstDayIndex, weekData) => {
            let date = 1;
            let weekOneArr = [];
            for (let i = 0; i < 7; i++) {
                if (i < firstDayIndex) {
                    weekOneArr.push(<Day key={uniqid()} />);
                } else {
                    // weekData.today.setHours(19); 
                    // Daylight savings 
                    let fullDate = new Date(weekData.year, weekData.monthIndex, date)
                        .toISOString()
                        .split("T")[0];
                    let dateStr = weekData.today.toISOString().split("T")[0];
                    weekOneArr.push(
                        <Day
                            viewSwitch={viewSwitch}
                            logs={weekData.logs[fullDate]}
                            date={date++}
                            fullDate={fullDate}
                            key={uniqid()}
                            isToday={fullDate === dateStr ? weekData.today : undefined}
                        />
                    );
                }
            }
            return { tableCells: weekOneArr, endDate: date };
        },
        [viewSwitch]
    );

    const daysInMonth = (m, y) => {
        return new Date(y, m, 0).getDate();
    };
    const year = monthOriginDate.getFullYear();
    const monthIndex = monthOriginDate.getMonth();
    const totalDays = daysInMonth(monthIndex + 1, year);
    const firstDayIndex = new Date(year, monthIndex).getDay();
// ===========Calendar Utilities=====================================================================================


//=================================================================================================================== 
    useEffect(() => {
        const weekData = {
            monthIndex: monthIndex,
            year: year,
            today: new Date(),
            logs: logs,
        };
        const initialWeek = buildWeekOne(firstDayIndex, weekData);
        setInitialWeekEndDate(initialWeek.endDate)
        setFirstWeek(initialWeek.tableCells);
    }, 
        [firstDayIndex, monthIndex, year, totalDays, logs, buildWeekOne]
    );
//=================================================================================================================== 

    const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayNames = abrevDays.map((day) => {
        return <th key={day}>{day}</th>;
    });
    const monthLabels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    return (
        <div className="month">
            <div className="month-header">
                <p>{monthLabels[monthOriginDate.getMonth()]}</p>
            </div>
            <table>
                <thead>
                    <tr>{dayNames}</tr>
                </thead>
                {
                    (initialWeekEndDate) ? 
                        <tbody>
                            <tr>{firstWeek}</tr> 
                            <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate} viewSwitch={viewSwitch} logs={logs}/>
                            <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate + 7} viewSwitch={viewSwitch} logs={logs}/>
                            <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate + 14} viewSwitch={viewSwitch} logs={logs}/>
                            <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate + 21} viewSwitch={viewSwitch} logs={logs}/>
                            {(initialWeekEndDate + 28 <= totalDays) ?
                                <Week monthOriginDate={monthOriginDate} startDate={initialWeekEndDate + 28} viewSwitch={viewSwitch} logs={logs}/>
                            : null}
                        </tbody> 
                    : null
                }
            </table>
        </div>
    );
};

export default Month;