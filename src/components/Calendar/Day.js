const Day = ({ date, fullDate, workouts }) => {
    return (
        <td className={!fullDate ? "blank" : "day"} full-date={fullDate}>
            <span className="date">{date}</span>
            {workouts !== undefined && 
                workouts.map((workout)=>{
                    console.log(workout)
                    if (workout.name[0] === "W") {
                        const workoutName = workout.name.split("→")[1]
                        return <span>{workoutName}</span>
                        // console.log(typeof workoutName[1])
                    } 
                    return <span key={workout.upload_id}>{workout.name}</span>
                })
            }
        </td>
    );
};

export default Day;

