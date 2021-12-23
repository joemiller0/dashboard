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
            case 'yes':
                setHasWorkouts(true)
                break;
            case 'no':
                break;    
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        const program = {
            "title": title,
            "start_date": startDate,
            "end_date": endDate,
            "description": description,
        }
        createProgram(program)
        programFormViewSwitch()
    }

    return  (
        <div className="form-container">
            <form onSubmit={onSubmit} >
                <input onChange={onChange} type="text" value={title} name="title" placeholder="Title" />
                <textarea onChange={onChange} type="text" value={description} name="description" placeholder="description" />
                <input onChange={onChange} type="date" value={startDate} name="startDate" placeholder="Start Date" />
                <input onChange={onChange} type="date" value={endDate} name="endDate" placeholder="End Date" />

                <label>
                    Does this program already have workouts that have been created?
                    <select onChange={onChange} value={hasWorkouts}>
                        <option value="yes" key="yes">Yes</option>
                        <option value="no" key="no">No</option>
                    </select>
                </label>

                {hasWorkouts === true &&  
                    <div>test</div>
                }


            </form>
        </div>
    )



    // return (
    //     <div className="form-container">
    //         <form onSubmit={onSubmit} >
    //         <input type="date" value={date} name="date" onChange={onChange} placeholder="date" />
    //         <input type="time" value={time} name="time" onChange={onChange} placeholder="time" />
    //         <textarea type="text" value={body} name="body" onChange={onChange} placeholder="body" />
    //             <button type="submit" value="submit">Add Log</button>
    //         </form>
    //     </div>
    // );
};

