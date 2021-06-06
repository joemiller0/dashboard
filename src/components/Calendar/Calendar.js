// import { useState } from "react";
import "../../stylesheets/calendar.css";
import Month from './Month';

const Calendar = ({ activities }) => {
    
    
    return (
        <div className="calendar">
            <Month activities={activities} />
        </div>
    );
};

export default Calendar;

