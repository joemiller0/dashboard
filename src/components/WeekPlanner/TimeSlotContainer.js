import { useEffect, useState } from "react";
// import uniqid from "uniqid";
import TimeSlot from "./TimeSlot";

const TimeSlotContainer = ({workouts}) => {
    const [amWorkouts, setAMworkouts] = useState([])
    // const [lunchWorkouts, setLunchworkouts] = useState([])
    // const [pmWorkouts, setPMworkouts] = useState([])

    // const buildAM = useCallback(
    //     () => {
    //         let morningWorkouts = [];
            
    //     }
    // )


    useEffect(()=>{
        if (workouts.length === 0) return

        let am = [];
        workouts.map((w)=>{
            if(w.time === 'am'){
                am.push(<TimeSlot workout={w}/>)
            }
            return setAMworkouts(am)
        })

    },[workouts])
    

    console.log(amWorkouts)

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