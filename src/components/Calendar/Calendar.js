import { useState, useEffect } from "react";
import Month from './Month';
import "../../stylesheets/calendar.css";

const Calendar = ({ activities }) => {
    const today = new Date();
    const [workouts, setWorkouts] = useState({})
    const [selectedDate, setSelectedDate] = useState(today);
    
    useEffect(() => {
        if (!activities || !activities.length) return
        
        let workoutsObj = {}
        activities.forEach((workout) => {
            const date = workout.start_date_local.split('T')[0];
            if (!workoutsObj[date]) {
                workoutsObj[date] = [workout]
            } else {
                workoutsObj[date].push(workout)
            }
        })
        setWorkouts(workoutsObj)
    }, [activities]);
    
    const nextMonthDate = (selectedDate) => {
        return new Date(selectedDate.setMonth(selectedDate.getMonth()+1))
    }
    console.log(nextMonthDate(selectedDate))
    // const nextMonthSelectedDate = new Date(selectedDate.setMonth(selectedDate.getMonth()+1))
    // console.log(nextMonthSelectedDate)



    //ok one way would be to feed the month a selectedDate that suits the month you want which is what youa re trying and failling to do so far. 
    //maybe its possible to do that check in the month component? somehow?

    // goal to have a four month calendar view that shows the length of a program

    return (
        <div className="calendar">
            {/* <Month selectedDate={nextMonthSelectedDate} workouts={workouts}/> */}
            <Month selectedDate={selectedDate} workouts={workouts}/>
        </div>
    );
};

export default Calendar;

