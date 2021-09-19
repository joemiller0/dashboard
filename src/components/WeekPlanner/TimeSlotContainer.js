import { useCallback, useEffect, useState } from "react";
import uniqid from "uniqid";
import Month from "../Calendar/Month";
import TimeSlot from "./TimeSlot";

const TimeSlotContainer = ({workouts}) => {
    const [amWorkouts, setAMworkouts] = useState([])
    const [lunchWorkouts, setLunchworkouts] = useState([])
    const [pmWorkouts, setPMworkouts] = useState([])

    console.log(workouts)
    // you want each of the arrays in the state to be an array of TimeSlot components - mirror Month.js
    
    return (
        <tbody>
            <tr>
                <td>am</td>
                {amWorkouts}
            </tr>
            <tr>
                <td>lunch</td>
            </tr>
            <tr>
                <td>pm</td>
            </tr>
        </tbody>
    )
};

export default TimeSlotContainer;