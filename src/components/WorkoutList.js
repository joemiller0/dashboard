import '../stylesheets/workout.css';

const WorkoutList = (props) => {
    const workouts = props.activities;

    return (
        <div className="workout-container">
                {workouts.map((a) => {
                    console.log(a)
                    const d = new Date(a.start_date)
                    const date = d.toDateString()
                    return (
                        <div className="workout" key={a.id}>
                            <div className="workout-header">
                                <span className="workout-start-date">{date}</span>
                            </div>
                            <span className="workout-name">{a.name}</span>
                        </div>
                    )
                })}
        </div>
    );
}

export default WorkoutList;
