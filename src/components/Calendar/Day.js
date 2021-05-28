const Day = ({ date, fullDate, workouts }) => {
    return (
        <td className={!fullDate ? "blank" : "day"} full-date={fullDate}>
            {date}
            {workouts !== undefined && 
                workouts.map((workout)=>{
                    return <p key={workout.upload_id}>{workout.name}</p>
                })
            }
        </td>
    );
};

export default Day;

