import "./program_manager.css";


export const ProgramManager = ({ programs }) => {

    if (programs.length === 0) {
        return <div className="program-container"> There are no programs yet </div>
    }

    return (
        <div className="program-container">
            {programs.map((program) => <div key={program.id}>{program.title}</div>)}
        </div>
    )
};

