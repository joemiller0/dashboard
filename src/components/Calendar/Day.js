const Day = ({ date, fullDate, workouts, selectedDate }) => {
    // console.log(selectedDate)
    const getMinMileAvg = (metersPerSecond) => {
        const milesPerMin = metersPerSecond * 0.037282272
        // 1 meter per second (m/s) = 0.037282272 mile per minute (mi/min)
        const decimalMins = 1 / milesPerMin
        const min = Math.floor(decimalMins)
        const decimal = decimalMins - Math.floor(decimalMins)
        const secDec = decimal * 60
        const sec = Math.floor(secDec)

        if (sec < 10) return `${min}:0${sec}/mi avg`
        return `${min}:${sec}/mi avg`
    }

    const roundDistance = (distance) => {
        return Math.round(distance * 100) / 100
    }

    return (
        <td valign="top" className={selectedDate ? "selectedDate" : "day"} full-date={fullDate}>
            <div className="date">{date}</div>
            <div className="workoutsContainer">
                {workouts !== undefined && 
                    workouts.map((workout)=>{
                        if (workout.name[0] === "W") {
                            const whoopDayStrain = workout.name.split("→")[1]
                            const whoopActivity = workout.name.split("→")[0]
                            const strain = whoopDayStrain.split(" ")[1]
                            const activity = whoopActivity.slice(6)
                            return (
                                <div key={workout.upload_id} className="workout whoop">
                                    <div className="activity">
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
                            <div className="workout strava" key={workout.upload_id}>
                                <div className="stravaRun">
                                    {workout.name}
                                </div>
                                <div className="highlight">
                                    {totalDistance} miles<br></br>
                                    {minMileAvg} <br></br>
                                    {workout.suffer_score} suffer
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </td>
    );
};

export default Day;

