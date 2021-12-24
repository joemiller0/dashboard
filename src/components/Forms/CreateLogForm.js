import { useState } from "react";
import "./form.css";

export const CreateLogForm = ({ logFormViewSwitch, createLog }) => {
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

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
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        const log = {
            "lid": Math.floor(Math.random() * 9000000) + 1000000,
            "body": body,
            "date": date, 
            "time": time,
            "stravaLog": null
        
        }
        createLog(log);
        logFormViewSwitch();
    }

    return (
        <div className="form-container">
            <h4>Create Log</h4>
            <form onSubmit={onSubmit} >
            <input type="date" value={date} name="date" onChange={onChange} placeholder="date" />
            <input type="time" value={time} name="time" onChange={onChange} placeholder="time" />
            <textarea type="text" value={body} name="body" onChange={onChange} placeholder="body" />
                <button type="submit" value="submit">Add Log</button>
            </form>
        </div>
    );
};

