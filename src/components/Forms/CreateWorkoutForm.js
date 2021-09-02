import { useState } from "react";
import { useForm } from "../../hooks/hooks";

const CreateWorkoutForm = ({ createWorkout }) => {
    const { title, desc, onChangeInput, onSubmitInput } = useForm('');

    return (
        <form onSubmit={(e)=>onSubmitInput( e, createWorkout)} >
            <label></label>
            <input type="text" value={title} name="title" onChange={onChangeInput} placeholder="test" />
            <input type="text" value={desc} name="desc" onChange={onChangeInput} placeholder="test2" />
            <button type="submit" value="submit">Submit</button>
        </form>
    );
};

export default CreateWorkoutForm;