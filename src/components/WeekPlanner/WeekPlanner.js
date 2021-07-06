import "../../stylesheets/weekplanner.css";

const WeekPlanner = () => {


    //three slots for each day will have the option to place a workout, this will be the general template of my weekly training
    //need to create and update workouts and be able to drag and drop them to move and update them. 
    //ill need CRUD with a DB here and a drag n drop library for sure. 


    const abrevDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayNames = abrevDays.map((day) => {
        return <th key={day}>{day}</th>;
    });
    return (
        <div className="weekPlanner-container">
            <table className="weekPlanner">
                <thead>
                    <th></th>{dayNames}
                </thead>
                <tbody>
                    <tr><td>am</td><td></td><td></td></tr>
                    <tr><td>lunch</td></tr>
                    <tr><td>pm</td></tr>
                </tbody>
            </table>
        </div>
    )
};

export default WeekPlanner;

