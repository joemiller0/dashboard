import uniqid from 'uniqid';
import "./workoutlist.css";


const WorkoutList = ({workouts}) => {
    return (
        <div className="workout-list-container">
            <div className="workoutlist">
                <h3>Your Workouts</h3>
                {workouts ? 
                    workouts.map((workout) => {
                        return <p key={uniqid()}>{workout.title}</p>
                    })
                :
                    null
                }
            </div>
        </div>
    )
};

export default WorkoutList;

