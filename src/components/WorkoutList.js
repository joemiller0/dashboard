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

    // set startDate and endDate based on first and last item in the activities array
    useEffect(()=>{
        const latest = activities[0]
        const earliest = activities[activities.length-1]

        if(latest !== undefined) {
            const endDate = new Date(latest.start_date)
            setEndDate(endDate.toDateString())
        }
        if(earliest !== undefined) {
            const startDate = new Date(earliest.start_date)
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