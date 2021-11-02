import uniqid from 'uniqid';
import "./loglist.css";


const LogList = ({logs}) => {
    return (
        <div className="log-list-container">
            <div className="loglist">
                <h3>Your Logs</h3>



                {/* {logs ? 
                    logs.map((log) => {
                        return <p key={uniqid()}>{log.title}</p>
                    })
                :
                    null
                } */}
            </div>
        </div>
    )
};

export default LogList;

