import { useState, useEffect } from "react";
import "./form.css";

export const CreateWorkoutForm = ({viewSwitch, workoutFormViewSwitch, createWorkout, program}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [program_id, setProgram_id] = useState('');

    useEffect(()=>{
        setProgram_id(program.id)
    }, [program.id])

    const onChange = e => {
        switch (e.target.name){
            case 'title' :
                setTitle(e.target.value)
                break;
            case 'description':
                setDescription(e.target.value)
                break;
            default: return null;
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        const workout = {
            "title": title,
            "description": description,
            "program_id": program_id
        }
        // viewSwitch();
        createWorkout(workout)
        workoutFormViewSwitch()
    }

    return  (
        <div className="form-container">
            <h4>Create Workout</h4>
            <form onSubmit={onSubmit} >
                <input onChange={onChange} type="text" value={title} name="title" placeholder="Title" />
                <textarea onChange={onChange} type="text" value={description} name="description" placeholder="description" />
                <button type="submit" value="submit">Create Workout</button>
            </form>
        </div>
    )
};

