import { useState } from "react";
import { ProgramModal, CreateWorkoutForm } from '../components.js';

export const Program = ({ createWorkout, workouts, program }) => {
    const [viewState, setViewState] = useState(false);
    const [workoutFormView, setWorkoutFormView] = useState(false);

    // console.log(workouts)

    const viewSwitch = e => {
        setViewState(!viewState)
    }

    const workoutFormViewSwitch = e => {
        setWorkoutFormView(!workoutFormView)
    }

    return (
        <div onClick={viewSwitch} className="program">
            <h4>{program.title}</h4>
            <p>{program.description}</p>

            {viewState === true &&
                <div className="program-modal-container">
                    <ProgramModal 
                        workouts={workouts} 
                        viewSwitch={viewSwitch} 
                        workoutFormViewSwitch={workoutFormViewSwitch} 
                        program={program} 
                    />
                    <div onClick={viewSwitch} className="dimmed-bg2" />
                </div>
            }
            {workoutFormView === true &&
                <div className="workout-modal-container">
                    <CreateWorkoutForm 
                        workoutFormViewSwitch={workoutFormViewSwitch} 
                        createWorkout={createWorkout} 
                        program={program} 
                    />
                    <div onClick={workoutFormViewSwitch} className="dimmed-bg2" />
                </div>
            }
        </div>
    )
};
// There is a difference here between this component and the calendar component which deals with similar logic
// the modal fpr the day is on the calendar - I did this because it seemed like it made the most sense and the daat struture of the logs object works in that way. 
// the modal is deeper in the HTML tree here, which seems to cause some issues with click handlers with the layers of divs
// question here - is it better to nest hte modal deep in the HTMl structure like this - or in a more shallow way like i did with the Calendar/DayModal components?
