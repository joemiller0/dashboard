import { useState } from "react";
import "./form.css";

export const CreateProgramForm = ({ programFormViewSwitch, createProgram, workouts }) => {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [hasWorkouts, setHasWorkouts] = useState(false);

    const onChange = e => {
        switch (e.target.name){
            case 'title' :
                setTitle(e.target.value)
                break;
            case 'startDate':
                setStartDate(e.target.value)
                break;
            case 'endDate':
                setEndDate(e.target.value)
                break;
            case 'description':
                setDescription(e.target.value)
                break;
            case 'hasWorkout':
                if (e.target.value === "true" ){
                    setHasWorkouts(true)
                } else {
                    setHasWorkouts(false)
                }
                break;
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        const program = {
            "title": title,
            "startDate": startDate,
            "endDate": endDate,
            "description": description,
        }
        createProgram(program)
        programFormViewSwitch()
    }

    return  (
        <div className="form-container">
            <h4>Create Program</h4>
            <form onSubmit={onSubmit} >
                <input onChange={onChange} type="text" value={title} name="title" placeholder="Title" />
                <textarea onChange={onChange} type="text" value={description} name="description" placeholder="description" />
                <input onChange={onChange} type="date" value={startDate} name="startDate" placeholder="Start Date" />
                <input onChange={onChange} type="date" value={endDate} name="endDate" placeholder="End Date" />
                <label>
                    Does this program already have workouts that have been created?
                    <select name="hasWorkout" onChange={onChange} value={hasWorkouts}>
                        <option value={true} key="yes">Yes</option>
                        <option value={false} key="no">No</option>
                    </select>
                </label>
                {hasWorkouts === true &&  
                    <div>test</div>
                }
                <button type="submit" value="submit">Create Program</button>
            </form>
        </div>
    )
};

