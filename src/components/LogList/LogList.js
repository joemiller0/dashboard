import uniqid from 'uniqid';
import { useApi } from "../../hooks/hooks";
import "./loglist.css";


const LogList = () => {
    const { logs } = useApi();
    // const objectHelper = (logsObj) => {
    //     const dates = Object.keys(logsObj)
    
    // }
    const dates = Object.keys(logs)

    return (
        <div className="log-list-container">
            <div className="loglist">
                <h3>Your Logs</h3>
                {dates.map(date=><p key={date}>{date}</p>)}
            </div>
        </div>
    )
};

export default LogList;

