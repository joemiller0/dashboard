const Day = ({ date, fullDate, workouts }) => {
    const getDecimal = (n) => {
        return (n - Math.floor(n));
    }
    const roundDistance = (distance) => {
        return Math.round(distance * 100) / 100
    }

    return (
        <td valign="top" className={!fullDate ? "blank" : "day"} full-date={fullDate}>
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
                        console.log(workout)

                        const milesPerMin = workout.average_speed * 0.037282272
                        const decimalTime = 1 / milesPerMin
                        const min = Math.floor(decimalTime)
                        const decimal = getDecimal(decimalTime)
                        const secDec = decimal * 60
                        const sec = Math.floor(secDec)

                        const toMiles = workout.distance / 1609
                        const totalDistance = roundDistance(toMiles)

                        return (
                            <div className="workout strava" key={workout.upload_id}>
                                <div className="stravaRun">
                                    {workout.name}
                                </div>
                                <div className="highlight">
                                    {totalDistance} miles<br></br>
                                    {min}:{sec}/mi avg <br></br>
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

