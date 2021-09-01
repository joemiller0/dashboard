import "../../stylesheets/nav.css";

const Nav = ({athlete}) => {

    return (
        <div className="nav-container">
            <span className="name">SUP {athlete.firstname}</span>
            <a target="_blank" rel="noreferrer" className="create" href="http://joemiller.co/">Create Workout</a>
            <a target="_blank" rel="noreferrer" className="profile" href="http://joemiller.co/">View Profile</a>
        </div>
    )
};

export default Nav;

