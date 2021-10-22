import { useState, useEffect } from "react";
const AMSlots = (workouts) => {
    const [sunday, setSunday] = useState("sunday");
    const [monday, setMonday] = useState("monday");
    const [tuesday, setTuesday] = useState("tuesday");
    const [wednesday, setWednesday] = useState("wednesday");
    const [thursday, setThursday] = useState("thursday");
    const [friday, setFriday] = useState("friday");
    const [saturday, setSaturday] = useState("saturday");


    useEffect(()=>{



    }, [workouts, sunday])
    console.log(sunday)

    return(
        <tr>
            <td>am</td><td>{sunday}</td><td>{monday}</td><td>{tuesday}</td><td>{wednesday}</td><td>{thursday}</td><td>{friday}</td><td>{saturday}</td>
        </tr>
    )
};

export default AMSlots;

