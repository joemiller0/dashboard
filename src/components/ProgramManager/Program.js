import { useEffect, useState } from "react";
import { ProgramModal, CreateWorkoutForm, Workout } from '../components.js';

export const Program = ({ createWorkout, workouts, program }) => {
    const [viewState, setViewState] = useState(false);
    const [workoutFormView, setWorkoutFormView] = useState(false);

    console.log(workouts)

    const viewSwitch = e => {
        setViewState(!viewState)
        if (e === undefined) return
        if (e.target.innerHTML === "x") return
        if (e.target.className === "dimmed-bg") return
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
                    <ProgramModal workouts={workouts} viewSwitch={viewSwitch} workoutFormViewSwitch={workoutFormViewSwitch} program={program} />
                    <div onClick={viewSwitch} className="dimmed-bg2" />
                </div>
            }
            {workoutFormView === true &&
                <div className="workout-modal-container">
                    <div onClick={workoutFormViewSwitch} className="dimmed-bg" />
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

