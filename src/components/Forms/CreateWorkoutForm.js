// import { useState } from "react";
import { useForm } from "../../hooks/hooks";
import "../../stylesheets/workoutform.css";

const CreateWorkoutForm = ({formViewSwitch, createWorkout }) => {
    const { title, desc, onChangeInput, onSubmitInput } = useForm('');

    return (
        <div className="workout-form-container">
            <form onSubmit={(e)=>onSubmitInput( e, createWorkout, formViewSwitch)} >
                <input type="text" value={title} name="title" onChange={onChangeInput} placeholder="title" />
                <input type="text" name="program" disabled placeholder="program: not available yet" />
                <textarea rows="5" type="text" value={desc} name="desc" onChange={onChangeInput} placeholder="desc" />
                <button type="submit" value="submit">Add Workout</button>
            </form>
        </div>
    );
};

export default CreateWorkoutForm;