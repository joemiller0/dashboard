// import { useEffect, useState } from "react";
import "../../stylesheets/dayModal.css";

const DayModal = ({ viewSwitch, logsArr, date }) => {
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
        <div className="log">
            <button onClick={viewSwitch}>x</button>
            <div className="log-header">
                <p className="log-start-date">{date}</p>
            </div>
            <div className="log-container">
                {logsArr !== undefined &&
                    logsArr.map((log) => {
                        if (log.name[0] === "W") {
                            const whoopDayStrain = log.name.split("→")[1]
                            const strain = whoopDayStrain.split(" ")[1]
                            const whoopActivity = log.name.split("→")[0]
                            const activity = whoopActivity.slice(6)
                            return (
                                <div key={log.upload_id} className="whoop">
                                    <div className="log-name">
                                        {activity}
                                    </div>
                                    <div className="highlight">
                                        {strain} Strain
                                    </div>
                                </div>
                            )
                        }
                        const metersToMiles = log.distance / 1609
                        const totalDistance = roundDistance(metersToMiles)
                        const minMileAvg = getMinMileAvg(log.average_speed)
                        return (
                            <div className="strava" key={log.upload_id}>
                                <div className="log-name">
                                    {log.name}
                                </div>
                                <div className="highlight">
                                    {totalDistance} mi - {minMileAvg} - <span className="suffer">Suffer Score: {log.suffer_score}</span>
                                </div><br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DayModal;
