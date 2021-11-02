// import { useState } from "react";
import { useForm } from "../../hooks/hooks";
import "./form.css";

const CreateWorkoutForm = ({workoutFormViewSwitch, createWorkout }) => {
    const {title, desc, time, day, onChangeInput, onSubmitInput } = useForm('');

    return (
        <div className="form-container">
            <form onSubmit={(e)=>onSubmitInput( e, createWorkout, workoutFormViewSwitch)} >
                <input type="text" value={title} name="title" onChange={onChangeInput} placeholder="title" />
                <input type="text" name="program" disabled placeholder="program: not available yet" />
                <div className="select-container">

                    <select name='time' value={time} onChange={onChangeInput} >
                        <option value="am" >AM</option>
                        <option value="lunch">Lunch</option>
                        <option value="pm">PM</option>
                    </select>

                    <select name='day' value={day} onChange={onChangeInput}>
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>

                </div>
                <textarea rows="5" type="text" value={desc} name="desc" onChange={onChangeInput} placeholder="desc" />
                <button type="submit" value="submit">Add Workout</button>
            </form>
        </div>
    );
};

export default CreateWorkoutForm;