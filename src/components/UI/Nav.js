import "./nav.css";

export const Nav = ({logFormViewSwitch, programFormViewSwitch, athlete}) => {

    return (
        <div className="nav-container">
            <span className="name">SUP {athlete.firstname}</span>
            <button className="create" onClick={programFormViewSwitch}>Create Program</button>
            {/* <button className="create" onClick={workoutFormViewSwitch}>Add Workout</button> */}
            <button className="create" onClick={logFormViewSwitch}>Add Log</button>
        </div>
    )
};

