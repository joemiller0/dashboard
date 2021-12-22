import "./nav.css";

export const Nav = ({logFormViewSwitch, athlete}) => {


    //right now all the componenets are just going to be listed out on the dashboard ot make thigns easy
    //but perhaps in the future, buttons in the nav reorder the components instread of playing with show/hide ideas, pull the prgram manager up above the claneder when the button is clicked byut still have the clendar be present.
    return (
        <div className="nav-container">
            <span className="name">SUP {athlete.firstname}</span>
            {/* <button className="create" onClick={workoutFormViewSwitch}>Add Workout</button> */}
            <button className="create" onClick={logFormViewSwitch}>Add Log</button>
        </div>
    )
};

