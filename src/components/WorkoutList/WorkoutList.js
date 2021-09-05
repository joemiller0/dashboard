import uniqid from 'uniqid';

const WorkoutList = ({workouts}) => {
    console.log(workouts)
    return (
        <div className="workout-list-container">
            {workouts ? 
                workouts.map((workout) => {
                    return <p key={()=>uniqid()}>{workout.title}</p>
                })
            :
                null
            }
        </div>
    )
};

export default WorkoutList;

