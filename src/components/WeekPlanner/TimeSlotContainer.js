import { useState, useEffect } from "react";
import AMSlots from './AMSlots';
import PMSlots from './PMSlots';
import LunchSlots from './LunchSlots';
import uniqid from "uniqid";


const TimeSlotContainer = ({workouts}) => {
    // console.log(workouts)
    return (
        <tbody>
            {workouts.map((w)=>{
                if (w.time === "am"){
                    return <AMSlots key={uniqid()} workouts={w} />
                } else if (w.time === "lunch"){
                    return <LunchSlots key={uniqid()} workouts={w} />
                } else if (w.time === "pm"){
                    return <PMSlots key={uniqid()} workouts={w} />
                } 
                return null
            })}
        </tbody>
    )
};

// need some check to make sure am is always on top, lunch is always in the middle and pm is always on the bottom

export default TimeSlotContainer;