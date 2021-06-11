import { useState, useEffect } from "react";
import Month from './Month';
import Workout from '../WorkoutList/Workout';
import "../../stylesheets/calendar.css";

const Calendar = ({ workouts }) => {
    const [viewState, setViewState] = useState(false);
    
    const today = new Date();
    const year = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    // is it better to pass these as props instead of redeclaring them in the lower components?

    const showWorkout =()=> {
        setViewState(true)
    }

    if (viewState === true){
        return (
            <div className="workout-modal">
                <Workout />
            </div>
        )
    }

    return (
        <div className="calendar">
            <h5>{year}</h5>
            <Month monthOriginDate={new Date(year, currentMonthIndex-1, 1)} workouts={workouts}/>
            <Month monthOriginDate={today} workouts={workouts}/>
            <Month monthOriginDate={new Date(year, currentMonthIndex+1, 1)} workouts={workouts}/>
        </div>
    );
};

export default Calendar;

