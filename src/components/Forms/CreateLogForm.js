import { useState } from "react";
import "./form.css";
import { useApi } from "../../hooks/hooks";

const CreateWorkoutForm = ({ logFormViewSwitch }) => {
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [stravalog, setStravalog] = useState(null);
    const [lid, setLid] = useState(Math.floor(Math.random() * 9000000) + 1000000);

    const { createLog } = useApi();

    const onChange = e => {
        if (e.target.name === "body"){
            setBody(e.target.value)
        }
        if (e.target.name === "date"){
            setDate(e.target.value)
        }
        if (e.target.name === "time"){
            setTime(e.target.value)
        }
        // if (e.target.name === "stravalog"){
        //     setStravalog(e.target.value)
        // }
        if (e.target.name === "lid"){
            setLid(e.target.value)
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        const log = {
            "lid": lid,
            "body": body,
            "date": date, 
            "time": time,
            "stravaLog": stravalog
        
        }
        console.log(log)
        createLog(log);
        logFormViewSwitch();
    }

    return (
        <div className="form-container">
            <form onSubmit={onSubmit} >
            <input type="date" value={date} name="date" onChange={onChange} placeholder="date" />
            <input type="time" value={time} name="time" onChange={onChange} placeholder="time" />

            <textarea type="text" value={body} name="body" onChange={onChange} placeholder="body" />

                
                <button type="submit" value="submit">Add Log</button>
            </form>
        </div>
    );
};

export default CreateWorkoutForm;