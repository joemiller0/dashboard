import "./program_manager.css";
import { Program } from '../components.js';


export const ProgramManager = ({ programs }) => {

    if (programs === undefined) {
        return <div className="program-container"> There are no programs yet </div>
    }

    return (
        <div className="program-container">
            <h4>Programs</h4>
            <div className="flex">
                {programs.map((program) => <Program program={program} />)}
            </div>
        </div>
    )
};

