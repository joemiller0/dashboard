import { useState } from "react";

function useForm(initialState) {
    const [title, setTitle] = useState(initialState);
    const [desc, setDesc] = useState(initialState);


    const onChangeInput =(e)=> {
        if (e.target.name === "title"){
            setTitle(e.target.value)
        }
        if (e.target.name === "desc"){
            setDesc(e.target.value)
        }
    };

    function onSubmitInput(e, submitCallback, viewSwitchFunction) {
        e.preventDefault();
        if (title || desc) {
            const newWorkoutObj = {
                'title':title,
                "desc":desc
            }
            submitCallback(newWorkoutObj);
            viewSwitchFunction();
            setTitle("");
            setDesc("");
        }
    }

    return { title, desc, onChangeInput, onSubmitInput };
}

export { useForm };

