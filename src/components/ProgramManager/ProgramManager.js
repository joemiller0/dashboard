// import { useEffect, useState } from "react";
import "./program_manager.css";
import { Program } from '../components.js';

export const ProgramManager = ({ createWorkout, workouts, programs }) => {

    if (programs === undefined || !programs.length) {
        return <div className="program-container"> There are no programs yet </div>
    }

    return (
        <div className="program-container">
            <h4>Programs</h4>
            <div className="flex inner">
                {programs.map((program) => {
                    const localWorkouts = []
                    workouts.map((workout)=>{
                        if (program.id === workout.program_id){
                            localWorkouts.push(workout)
                        }
                        return null
                    })
                    return <Program key={program.id} workouts={localWorkouts} program={program} createWorkout={createWorkout}/>
                })}
            </div>
        </div>
    )
};