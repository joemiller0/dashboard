import { useState } from "react";

function useForm(initialState) {
    const [input, setInput] = useState(initialState);

    console.log(input)

    const onChangeInput =(e)=> setInput(e.target.value);

    function onSubmitInput(e, submitCallback) {
        console.log(e)
        e.preventDefault();
        if (input) {
            submitCallback(input);
            setInput("");
        }
    }

    return { input, onChangeInput, onSubmitInput };
}

export { useForm };

