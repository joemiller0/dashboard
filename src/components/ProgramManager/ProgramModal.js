import { Workout } from '../components.js';

export const ProgramModal = ({ workouts, workoutFormViewSwitch, program }) => {

    return (
        <div className="program-modal">
            <h4>{program.title}</h4>
            <h5>workouts</h5>
            {workouts.map((workout) => <Workout key={workout.id} workout={workout} /> )}
            <button onClick={workoutFormViewSwitch}>Create Workout</button>
        </div>
    )
};

