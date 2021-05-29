const Day = ({ date, fullDate, workouts }) => {
    return (
        <td valign="top" className={!fullDate ? "blank" : "day"} full-date={fullDate}>
            <div className="date">{date}</div>
            <div className="workoutsContainer">
                {workouts !== undefined && 
                    workouts.map((workout)=>{
                        console.log(workout)
                        if (workout.name[0] === "W") {
                            const whoopDayStrain = workout.name.split("→")[1]
                            const strain = whoopDayStrain.split(" ")[1]
                            const whoopActivity = workout.name.split("→")[0]
                            const activity = whoopActivity.slice(6)
                            return (
                                <div key={workout.upload_id} className="workout whoop">
                                    <div className="activity">
                                        {activity}
                                    </div>
                                    <div className="dayStrain">
                                        {strain} Strain
                                    </div>
                                </div>
                            )
                        } 
                        return (
                            <div className="workout strava" key={workout.upload_id}>
                                <div className="stravaRun">
                                    {workout.name}
                                </div>
                                <div className="sufferScore">
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

