

const WorkoutList = ({workouts}) => {
    console.log(workouts)
    return (
        <div className="workout-list-container">
            {workouts ? 
                workouts.map((workout) => {
                    return <p>{workout.title}</p>
                })
            :
            console.log('else')
            }
        </div>
    )
};

export default WorkoutList;

