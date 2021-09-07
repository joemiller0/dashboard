import "../../stylesheets/weekplanner.css";

const WeekPlanner = ({workouts}) => {
    console.log(workouts)
    const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayNames = abrevDays.map((day) => {
        return <td key={day}>{day}</td>;
    });
    return (
        <div className="weekPlanner-container">
            <h3>Current Weekly Schedule</h3>
            {workouts.length ?
                workouts.map((workout)=>{
                    return (
                        <table className="weekPlanner">
                            <thead>
                                <tr>
                                    <td></td>{dayNames}
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>am</td></tr>
                                <tr><td>lunch</td></tr>
                                <tr><td>pm</td></tr>
                            </tbody>
                        </table>
                    )
                })
            :
                <table className="weekPlanner">
                    <thead>
                        <tr>
                            <td></td>{dayNames}
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>am</td></tr>
                        <tr><td>lunch</td></tr>
                        <tr><td>pm</td></tr>
                    </tbody>
                </table>
            }
        </div>
    )
};

export default WeekPlanner;