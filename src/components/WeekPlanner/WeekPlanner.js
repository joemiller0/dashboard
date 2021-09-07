import "../../stylesheets/weekplanner.css";

const WeekPlanner = () => {
    const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayNames = abrevDays.map((day) => {
        return <td key={day}>{day}</td>;
    });
    return (
        <div className="weekPlanner-container">
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
        </div>
    )
};

export default WeekPlanner;