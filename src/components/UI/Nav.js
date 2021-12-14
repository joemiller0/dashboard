import "./nav.css";

export const Nav = ({logFormViewSwitch, athlete}) => {

    return (
        <div className="nav-container">
            <span className="name">SUP {athlete.firstname}</span>
            <a target="_blank" rel="noreferrer" href="http://joemiller.co/">Manage Programs</a>
            {/* <button className="create" onClick={workoutFormViewSwitch}>Add Workout</button> */}
            <button className="create" onClick={logFormViewSwitch}>Add Log</button>
        </div>
    )
};

