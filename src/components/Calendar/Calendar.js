import { useState } from "react";
import "../../stylesheets/calendar.css";
import Month from './Month';

const Calendar = ({ activities }) => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);

    // const fullMonths = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    // ];
    // const monthFullName = fullMonths[monthIndex];
    
    const monthIndex = selectedDate.getMonth();
    const handlePrevMonth = () => {
        setSelectedDate(new Date(selectedDate.setMonth(monthIndex - 1)));
    }
    const handleNextMonth = () => {
        setSelectedDate(new Date(selectedDate.setMonth(monthIndex + 1)));
    }
    return (
        <div className="calendar">
            <button onClick={handlePrevMonth}>prev month</button>
            <button onClick={handleNextMonth}>next month</button>
            <Month activities={activities} selectedDate={selectedDate}/>
        </div>
    );
};

export default Calendar;

