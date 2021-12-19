import { useState } from "react";
import "./stylesheets/dayModal.css";

export const DayModal = ({ viewSwitch, deleteLog, logs, date }) => {
    const [ confirmMsg, setConfirmMsg ] = useState(false)
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

    const confirmDelete = e => {
        setConfirmMsg(true)
    }
    
    return (
        <div className="log">
            <button onClick={viewSwitch}>x</button>
            <div className="log-header">
                <p className="log-start-date">{date}</p>
            </div>
            <div className="log-container">
                {logs !== undefined &&
                    logs.map((log) => {
                        if (log.stravalog === null){
                            return (
                                <div key={log.id} className="baseLog">
                                    {log.body} <br />
                                    {log.date} <br />
                                    {log.time} <br />
                                    {log.id} - {log.lid}
                                </div>
                            )
                        }
                        if (log.stravalog.name[0] === "W") {
                            const whoopDayStrain = log.stravalog.name.split("→")[1]
                            const strain = whoopDayStrain.split(" ")[1]
                            const whoopActivity = log.stravalog.name.split("→")[0]
                            const activity = whoopActivity.slice(6)
                            return (
                                <div key={log.stravalog.upload_id} className="whoop">
                                    <div className="log-name">
                                        {activity}
                                    </div>
                                    <div className="highlight">
                                        {strain} Strain
                                    </div>
                                </div>
                            )
                        }
                        const metersToMiles = log.stravalog.distance / 1609
                        const totalDistance = roundDistance(metersToMiles)
                        const minMileAvg = getMinMileAvg(log.stravalog.average_speed)
                        return (
                            <div className="strava" key={log.stravalog.upload_id}>
                                <div className="log-name">
                                    {log.stravalog.name}
                                </div>
                                <div className="highlight">
                                    {totalDistance} mi - {minMileAvg} - <span className="suffer">Suffer Score: {log.stravalog.suffer_score}</span>
                                </div><br />
                            </div>
                        )
                    })
                }
                <button id="delete-log-btn" onClick={confirmDelete}> Delete Log </button>
            </div>
            {confirmMsg === true &&
                <div id="confirmMsg">
                    Are you sure you want to delete this record?<br />
                    <a href="#" class="modalbtn" onClick={ e => deleteLog(e) }>Yes</a>
                    <a href="#" class="modalbtn" onClick={() => setConfirmMsg(false)}>No</a>
                </div>
            }
        </div>
    );
};
