const Day = ({ date, fullDate, workouts }) => {
    console.log(workouts)
    return (
        <td className={!fullDate ? "blank" : "day"} full-date={fullDate}>
            {date}
            {workouts !== undefined && 
                workouts.map((workout)=>{
                    return <p>{workout.name}</p>
                })
            }
        </td>
    );
};

export default Day;

