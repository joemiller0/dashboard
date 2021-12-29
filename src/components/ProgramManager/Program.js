import { useState } from "react";
import { ProgramModal, CreateWorkoutForm } from '../components.js';

export const Program = ({ createWorkout, workouts, program }) => {
    const [viewState, setViewState] = useState(false);
    const [workoutFormView, setWorkoutFormView] = useState(false);

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
                </div>
            }
            {workoutFormView === true &&
                <div className="workout-modal-container">
                    <CreateWorkoutForm 
                        workoutFormViewSwitch={workoutFormViewSwitch} 
                        createWorkout={createWorkout} 
                        program={program} 
                    />
                </div>
            }
        </div>
    )
};
// There is a difference here between this component and the calendar component which deals with similar logic
// the modal for the day is on the calendar instead of nested deeply into the day - I did this because it seemed like it made the most sense and the data struture of the logs object works in that way. 
// the modal is deeper in the HTML tree here, which seems to cause some issues with click handlers with the layers of divs
// question here - i think it might be better to have the modals render in a more shallow way on the HTML but I actually do not know to be certain. 
// div>div has to be, in a basic sense, more to load than just div>
