import "../../stylesheets/nav.css";

const Nav = ({formViewSwitch, athlete}) => {

    return (
        <div className="nav-container">
            <span className="name">SUP {athlete.firstname}</span>
            <a target="_blank" rel="noreferrer" href="http://joemiller.co/">Manage Programs</a>
            <button className="create" onClick={formViewSwitch} >Add Workout</button>
            <a target="_blank" rel="noreferrer" className="profile" href="http://joemiller.co/">View Profile</a>
        </div>
    )
};

export default Nav;

