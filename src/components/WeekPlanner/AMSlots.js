import { useState, useEffect, useCallback } from "react";
const AMSlots = ({ workouts }) => {
    const [sunday, setSunday] = useState("sunday");
    const [monday, setMonday] = useState("monday");
    const [tuesday, setTuesday] = useState("tuesday");
    const [wednesday, setWednesday] = useState("wednesday");
    const [thursday, setThursday] = useState("thursday");
    const [friday, setFriday] = useState("friday");
    const [saturday, setSaturday] = useState("saturday");


    const buildSlots = useCallback((
        (workouts) => {
            console.log(workouts)
            workouts.map((w)=>{
                console.log(w)
            })
        }
    ))

    useEffect(()=>{

        // buildSlots();

    }, [buildSlots])
    console.log(sunday)
    console.log(workouts)


    return(
        <tr>
            <td>am</td><td>{sunday}</td><td>{monday}</td><td>{tuesday}</td><td>{wednesday}</td><td>{thursday}</td><td>{friday}</td><td>{saturday}</td>
        </tr>
    )
};

export default AMSlots;

