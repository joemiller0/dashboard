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

    console.log(strava)
    console.log(whoop)

    const combineDates = () => {
        for (let s = 0; s < strava.length; s++) {
            const d = new Date(strava[s].start_date)
            const date = d.toDateString()

            for (let w = 0; w < whoop.length; w++) {
                if (strava[s].start_date === whoop[w].start_date) {


                    workouts.push(
                        <div className="workout" key={strava[s].id}>
                            <div className="workout-header">
                                <span className="workout-start-date">{date}</span>
                            </div>
                            <div className="workouts">
                                <p>{strava[s].name}</p>
                                <p>{whoop[w].name}</p>
                            </div>
                        </div>
                    )
                } else {
                    workouts.push(
                        <div className="workout" key={whoop[w].id}>
                            <div className="workout-header">
                                <span className="workout-start-date">{date}</span>
                            </div>
                            <div className="workouts">
                                <p>{strava[s].name}</p>
                            </div>
                        </div>
                    )
                }
            }
        }
    }

    //this is all wrong above, there will be whoop data where these is not strava stat at times, not vice versa. its early woof
    return (
        <div className="workout-container">

            {combineDates()}
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