import { useCallback, useEffect, useState } from "react";
import uniqid from "uniqid";
import Day from "./Day";

const Month = ({ viewSwitch, monthOriginDate, logs }) => {
    const [firstWeek, setFirstWeek] = useState([]);
    const [secondWeek, setSecondWeek] = useState([]);
    const [thirdWeek, setThirdWeek] = useState([]);
    const [fourthWeek, setFourthWeek] = useState([]);
    const [fifthWeek, setFifthWeek] = useState([]);
    const [sixthWeek, setSixthWeek] = useState([]);

    const daysInMonth = (m, y) => {
        return new Date(y, m, 0).getDate();
    };
    const year = monthOriginDate.getFullYear();
    const monthIndex = monthOriginDate.getMonth();
    const totalDays = daysInMonth(monthIndex + 1, year);
    const firstDayIndex = new Date(year, monthIndex).getDay();
    const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayNames = abrevDays.map((day) => {
        return <th key={day}>{day}</th>;
    });

    // -----Week Building Functions-----

    const buildWeekOne = useCallback(
        (firstDayIndex, weekData) => {
            let date = 1;
            let weekOneArr = [];
            for (let i = 0; i < 7; i++) {
                if (i < firstDayIndex) {
                    weekOneArr.push(<Day key={uniqid()} />);
                } else {
                    weekData.today.setHours(19);
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

    const buildMiddleWeek = useCallback(
        (startDate, weekData) => {
            let middleWeekArr = [];
            for (let i = 0; i < 7; i++) {
                weekData.today.setHours(19);
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
            return middleWeekArr;
        },
        [viewSwitch]
    );

    const buildEndWeek = useCallback(
        (startDate, weekData, totalDays) => {
            let endWeekArr = [];
            for (let i = 0; i < 7; i++) {
                if (startDate > totalDays) {
                    endWeekArr.push(<Day key={uniqid()} />);
                } else {
                    weekData.today.setHours(19);
                    let fullDate = new Date(weekData.year, weekData.monthIndex, startDate)
                        .toISOString()
                        .split("T")[0];
                    let dateStr = weekData.today.toISOString().split("T")[0];
                    endWeekArr.push(
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
            }
            return endWeekArr;
        },
        [viewSwitch]
    );

    // -----END Week Building Functions-----

    useEffect(() => {
        const weekData = {
            monthIndex: monthIndex,
            year: year,
            today: new Date(),
            logs: logs,
        };
        const initialWeek = buildWeekOne(firstDayIndex, weekData);

        setFirstWeek(initialWeek.tableCells);
        setSecondWeek(buildMiddleWeek(initialWeek.endDate, weekData));
        setThirdWeek(buildMiddleWeek(initialWeek.endDate + 7, weekData));
        setFourthWeek(buildMiddleWeek(initialWeek.endDate + 14, weekData));
        setFifthWeek(buildEndWeek(initialWeek.endDate + 21, weekData, totalDays));

        if (initialWeek.endDate + 28 > totalDays) return;
        setSixthWeek(buildEndWeek(initialWeek.endDate + 28, weekData, totalDays));
    }, [
        firstDayIndex,
        monthIndex,
        year,
        totalDays,
        logs,
        buildWeekOne,
        buildMiddleWeek,
        buildEndWeek,
    ]);

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
                <tbody>
                    <tr>{firstWeek}</tr>
                    <tr>{secondWeek}</tr>
                    <tr>{thirdWeek}</tr>
                    <tr>{fourthWeek}</tr>
                    <tr>{fifthWeek}</tr>
                    <tr>{sixthWeek}</tr>
                </tbody>
            </table>
        </div>
    );
};

export default Month;
