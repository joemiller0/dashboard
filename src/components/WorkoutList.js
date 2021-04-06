import '../stylesheets/workout.css';

const WorkoutList = (props) => {
    const workouts = props.activities;

    return (
        <div className="workout-container">
            <ul className="workout-ul">
                {workouts.map((a) => {
                    console.log(a)
                    const d = new Date(a.start_date)
                    const date = d.toDateString()
                    return (
                        <li className="workout" key={a.id}>
                        <div className="workout-header">
                                <span className="workout-start-date">{date}</span>
                        </div>
                                <span className="workout-name">{a.name}</span>
                        </li>

                    )
                })}
            </ul>
        </div>
    );
}

export default WorkoutList;
