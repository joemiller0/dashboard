import '../stylesheets/workout.css';

const WorkoutList = (props) => {
    const workouts = props.activities;

    return (
        <ul className="workout-ul">
            {workouts.map((a) => {
                console.log(a)
                const d = new Date(a.start_date)
                const date = d.toDateString()
                return <li key={a.id}>
                            {a.name}<br />
                            {date}
                        </li>
            })}
        </ul>
    );
}

export default WorkoutList;
