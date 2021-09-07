import { useState } from "react";
function useForm(initialState) {
    const [title, setTitle] = useState(initialState);
    const [desc, setDesc] = useState(initialState);
    const [time, setTime] = useState('am');
    const [day, setDay] = useState('Sunday');

    const onChangeInput =(e)=> {
        if (e.target.name === "title"){
            setTitle(e.target.value)
        }
        if (e.target.name === "desc"){
            setDesc(e.target.value)
        }
        if (e.target.name === "day"){
            setDay(e.target.value)
        }
        if (e.target.name === "time"){
            setTime(e.target.value)
        }
    };

    function onSubmitInput(e, submitCallback, viewSwitchFunction) {
        e.preventDefault();
        if (title || desc) {
            const newWorkoutObj = {
                'title':title,
                'time':time,
                'day':day,
                "desc":desc
            }
            submitCallback(newWorkoutObj);
            viewSwitchFunction();
            setTitle("");
            setDesc("");
            setTime("");
            setDay("");
        }
    }
    return { title, desc, time, day, onChangeInput, onSubmitInput };
}

export { useForm };

