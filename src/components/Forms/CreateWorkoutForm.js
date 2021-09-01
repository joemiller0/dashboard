import { useState } from "react";
import { useInput } from "../../hooks/hooks";

const CreateWorkoutForm = ({ createWorkout }) => {
    const { input, onChangeInput, onSubmitInput } = useInput();

    return (
        <div className="">
            <button className="btn" onClick={createWorkout}>+</button>
        </div>
    );
};

export default CreateWorkoutForm;