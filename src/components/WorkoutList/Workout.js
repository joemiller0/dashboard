// import { useEffect, useState } from "react";
import "../../stylesheets/workout.css";

const Workout = ({ viewSwitch, workoutArr, date }) => {

    const getMinMileAvg = (metersPerSecond) => {
        const milesPerMin = metersPerSecond * 0.037282272
        // 1 meter per second (m/s) = 0.037282272 mile per minute (mi/min)
        const decimalMins = 1 / milesPerMin
        const min = Math.floor(decimalMins)
        const decimal = decimalMins - Math.floor(decimalMins)
        const secDec = decimal * 60
        const sec = Math.floor(secDec)

        if (sec < 10) return `${min}:0${sec}/mi avg`
        return `${min}:${sec}/mi`
    }

    const roundDistance = (distance) => {
        return Math.round(distance * 100) / 100
    }

    return (
        <div className="workout">
            <button onClick={viewSwitch}>x</button>

            <div className="workout-header">
                <p className="workout-start-date">{date}</p>
            </div>
            <div className="workout-container">
                {workoutArr !== undefined &&
                    workoutArr.map((workout) => {
                        if (workout.name[0] === "W") {

                            const whoopDayStrain = workout.name.split("→")[1]
                            const strain = whoopDayStrain.split(" ")[1]

                            const whoopActivity = workout.name.split("→")[0]
                            const activity = whoopActivity.slice(6)

                            return (
                                <div key={workout.upload_id} className="whoop">
                                    <div className="workout-name">
                                        {activity}
                                    </div>
                                    <div className="highlight">
                                        {strain} Strain
                                    </div>
                                </div>
                            )
                        }
                        const metersToMiles = workout.distance / 1609
                        const totalDistance = roundDistance(metersToMiles)
                        const minMileAvg = getMinMileAvg(workout.average_speed)
                        return (
                            <div className="strava" key={workout.upload_id}>
                                <div className="workout-name">
                                    {workout.name}
                                </div>
                                <div className="highlight">
                                    {totalDistance} mi - {minMileAvg} - <span className="suffer">Suffer Score: {workout.suffer_score}</span>
                                </div><br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Workout;
