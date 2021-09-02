import { useState } from "react";
import { useInput } from "../../hooks/hooks";

const CreateWorkoutForm = ({ createWorkout }) => {
    const { input, onChangeInput, onSubmitInput } = useInput('');

    return (
        <form onSubmit={(e)=>onSubmitInput(e, createWorkout)} >
            <input type="text" value={input} onChange={onChangeInput} placeholder="test" />
            <button type="submit" value="submit">Submit</button>
        </form>
    );
};

export default CreateWorkoutForm;