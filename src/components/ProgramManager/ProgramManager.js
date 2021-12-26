import { useEffect, useState } from "react";
import "./program_manager.css";
import { Program } from '../components.js';


export const ProgramManager = ({ workouts, programs }) => {

    if (programs === undefined || !programs.length) {
        return <div className="program-container"> There are no programs yet </div>
    }

    return (
        <div className="program-container">
            <h4>Programs</h4>
            <div className="flex inner">
                {programs.map((program) => <Program key={program.id} workouts={workouts} program={program} />)}
            </div>
        </div>

    )
};

