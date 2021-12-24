import { useEffect, useState } from "react";
import { ProgramModal } from '../components.js';

export const Program = ({ program }) => {
    const [viewState, setViewState] = useState(false);

    const viewSwitch = e => {
        setViewState(!viewState)
        if (e === undefined) return
        if (e.target.innerHTML === "x") return
        if (e.target.className === "dimmed-bg") return
        // setProgram(e.target.attributes.fulldate.value)
    }

    return (
        <div onClick={viewSwitch} className="program">
            <h4>{program.title}</h4>
            <p>{program.description}</p>

            {viewState === true &&
                <div className="program-modal-container">
                    <div onClick={viewSwitch} className="dimmed-bg2" />
                    <ProgramModal viewSwitch={viewSwitch} program={program} />
                </div>
            }
        </div>
    )
};

