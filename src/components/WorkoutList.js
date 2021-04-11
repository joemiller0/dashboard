import { useEffect, useState } from "react";
import "../stylesheets/workout.css";

const WorkoutList = (props) => {
    const activities = props.activities;
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    let whoop = [];
    let strava = [];
    let workouts = [];

    activities.forEach((a) => {
        if (a.name[0] === "W") {
            whoop.push(a);
        } else {
            strava.push(a);
        }
    });

    // set startDate and endDate based on first and last item in the activities array
    useEffect(() => {
        const latest = activities[0];
        const earliest = activities[activities.length - 1];

        if (latest !== undefined) {
            setEndDate(new Date(latest.start_date));
        }
        if (earliest !== undefined) {
            setStartDate(new Date(earliest.start_date));
        }

    }, [activities]);

    if(startDate !== ''){
        const year = startDate.getFullYear();
        const month = startDate.getMonth();
        let day = startDate.getDate();
        const dates = [startDate];
    
        while (dates[dates.length - 1] < endDate) {
            dates.push(new Date(year, month, ++day));
        }
        console.log(dates)
    }

    console.log(startDate)
    console.log(activities)


    return <div className="workout-container">{ }</div>;
};

export default WorkoutList;
