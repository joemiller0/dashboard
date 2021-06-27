import { useState } from "react";
import Month from './Month';
import Workout from '../WorkoutList/Workout';
import "../../stylesheets/calendar.css";

const Calendar = ({ workouts }) => {
    const [viewState, setViewState] = useState(false);
    const [modalDate, setModalDate] = useState("");
    
    const today = new Date();
    const year = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    // is it better to pass these as props instead of redeclaring them in the lower components?

    const viewSwitch =(e)=> {
        setViewState(!viewState)
        if (e.target.innerHTML === "x") return
        if(e.target.className === "dimmed-bg") return
        setModalDate(e.target.attributes.fulldate.value)
    }

    return (
        <div className="calendar-container">
            <div className="calendar">
                <h5>{year}</h5>
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date(year, currentMonthIndex-1, 1)} workouts={workouts}/>
                <Month viewSwitch={viewSwitch} monthOriginDate={today} workouts={workouts}/>
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date(year, currentMonthIndex+1, 1)} workouts={workouts}/>
            </div>
            {viewState === true &&
                <div className="modal-container">
                    <div onClick={viewSwitch} className="dimmed-bg" />
                    <Workout viewSwitch={viewSwitch} workoutArr={workouts[modalDate]} date={modalDate}/>
                </div>
            }
        </div>
    );
};

export default Calendar;

