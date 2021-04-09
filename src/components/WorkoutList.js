import '../stylesheets/workout.css';

const WorkoutList = (props) => {
    const activities = props.activities;

    let whoop = []
    let strava = []
    let workouts = []

    activities.forEach((a) => {
        if (a.name[0] === 'W') {
            whoop.push(a)
        } else {
            strava.push(a)
        }
    })

    const createWorkoutArr = () => {

    }


    console.log(strava)
    console.log(whoop)
    console.log(workouts)

    return (
        <div className="workout-container">
            {}
        </div>
    );
}

export default WorkoutList;

// {activities.map((a) => {
//     console.log(a)
//     const d = new Date(a.start_date)
//     const date = d.toDateString()
//     return (
//         <div className="workout" key={a.id}>
//             <div className="workout-header">
//                 <span className="workout-start-date">{date}</span>
//             </div>
//             <span className="workout-name">{a.name}</span>
//         </div>
//     )
// })}