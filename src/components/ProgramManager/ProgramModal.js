
export const ProgramModal = ({ workouts, workoutFormViewSwitch, program }) => {

    return (
        <div className="program-modal">
            <h4>{program.title}</h4>
            <h5>workouts</h5>
            {workouts.map((workout) => <p key={workout.id}>{workout.title}</p> )}

            <button onClick={workoutFormViewSwitch}>Create Workout</button>
        </div>
    )
};

