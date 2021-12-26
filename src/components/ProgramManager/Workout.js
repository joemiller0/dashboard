import { useEffect, useState } from "react";
import "./program_manager.css";
import { Program } from '../components.js';


export const Workout = ({ workout }) => {

    return (
        <div className="workout">
            {workout.title}
        </div>

    )
};

