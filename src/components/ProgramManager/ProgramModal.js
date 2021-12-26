export const ProgramModal = ({ workoutFormViewSwitch, program }) => {
    return (
        <div className="program-modal">
            <p>{program.title}</p>
            <button onClick={workoutFormViewSwitch}>Create Workout</button>
        </div>
    )
};

