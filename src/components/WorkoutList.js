import { useEffect, useState } from "react";
import '../stylesheets/workout.css';

const WorkoutList = (props) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const activities = props.activities;

    let whoop = []
    let strava = []
    let workouts = []

    activities.forEach((a) => {
        if (a.name[0] === 'W') {
            whoop.push(a)
        } else {
            strava.push(a)
        }
    })

    useEffect(()=>{
        const latestOne = activities[0]
        const earliestOne = activities[activities.length-1]

        if(latestOne !== undefined) {
            const endDate = new Date(latestOne.start_date)
            setEndDate(endDate.toDateString())
        }
        if(earliestOne !== undefined) {
            const startDate = new Date(earliestOne.start_date)
            setStartDate(startDate.toDateString())
        }
    }, [activities])
    
    console.log(startDate)
    console.log(endDate)
    return (
        <div className="workout-container">
            {}
        </div>
    );
}

export default WorkoutList;