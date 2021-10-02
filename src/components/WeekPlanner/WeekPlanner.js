import TimeSlotContainer from './TimeSlotContainer';
import "../../stylesheets/weekplanner.css";

const WeekPlanner = ({workouts}) => {
    const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayNames = abrevDays.map((day) => {
        return <td key={day}>{day}</td>;
    });

    return (
        <div className="weekPlanner-container">
            <h3>Current Weekly Schedule</h3>
                <table className="weekPlanner">
                    <thead>
                        <tr>
                            <td></td>{dayNames}
                        </tr>
                    </thead>
                    <TimeSlotContainer workouts={workouts} />
                </table>
        </div>
    )
};

export default WeekPlanner;