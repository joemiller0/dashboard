import { useEffect, useState, useRef } from "react";
import "../stylesheets/workout.css";

const WorkoutList = ({ activities }) => {
    // const [dates, setDates] = useState([])


    // const [startDate, setStartDate] = useState('');
    // const [endDate, setEndDate] = useState('');
    // const loaded = useRef(false);

    let whoop = [];
    let strava = [];

    activities.forEach((a) => {
        if (a.name[0] === "W") {
            whoop.push(a);
        } else {
            strava.push(a);
        }
    });


    useEffect(() => {
        // const latest = activities[0];
        // const earliest = activities[activities.length - 1];

        // let datesArr = [];
        
        // if (earliest !== undefined && latest !== undefined) {
        //     const startDate = new Date(earliest.start_date)
        //     const endDate = new Date(latest.start_date)

        //     const year = startDate.getFullYear();
        //     const month = startDate.getMonth();
        //     let day = startDate.getDate();
        //     datesArr.push(startDate);

        //     while (datesArr[datesArr.length - 1] < endDate) {
        //         datesArr.push(new Date(year, month, ++day));
        //     }

        // }

        // setDates(datesArr)

        // console.log(dates)

        console.log(activities)
        let workoutsObj = {}
        activities.forEach((workout)=>{
            const date = workout.start_date.split('T')[0];
            if(workoutsObj[date] === null){
                workoutsObj[date].push(workout)
            } else {
                workoutsObj[date] = workout
            }
            console.log(workoutsObj)
        })
        console.log(workoutsObj)

        
    }, [activities]);



    return (
        <div className="workout-container">

        </div>
    );
};

export default WorkoutList;
