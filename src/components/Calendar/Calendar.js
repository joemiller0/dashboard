import { useEffect, useState } from "react";
import { useApi } from "../../hooks/hooks";
import Month from './Month';
import DayModal from './DayModal';
import "./stylesheets/calendar.css";
import { flushSync } from "react-dom";

const Calendar = ({ logs }) => {
    const [viewState, setViewState] = useState(false);
    const [modalDate, setModalDate] = useState("");
    const [m1Logs, setM1Logs] = useState([]);
    const [m2Logs, setM2Logs] = useState([]);
    const [m3Logs, setM3Logs] = useState([]);

    const today = new Date();
    const year = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    // is it better to pass these as props instead of redeclaring them in the lower components?

    const viewSwitch = e => {
        setViewState(!viewState)
        if (e.target.innerHTML === "x") return
        if (e.target.className === "dimmed-bg") return
        setModalDate(e.target.attributes.fulldate.value)
    }


    useEffect(()=>{
        let m1 = {};
        let m2 = {};
        let m3 = {};

        Object.entries(logs).map((log, index) => {

            console.log(log)
            console.log(new Date(log[0]).getMonth())

            // there is some issue with the dates being offset
            // new Date(2021, 9, 01) === Fri Oct 01 2021 00:00:00 GMT-0400 (Eastern Daylight Time) {}
            // so in the IF statements below - the new Date() bits are off because the format that log[0] is too wierd

            // the whole purpose here is get only the logs needed for the particular Month, on the particular month - so that all months do not need to update when logs are updated. 

            if(new Date(log[0]).getMonth() === currentMonthIndex-2 ){
                m1[log[0]] = log[1]
            } 
            if(new Date(log[0]).getMonth() === currentMonthIndex-1 ){
                m2[log[0]] = log[1]
            } 
            if(new Date(log[0]).getMonth() === currentMonthIndex ){
                m3[log[0]] = log[1]
            } 
        })

        setM1Logs(m1)
        setM2Logs(m2)
        setM3Logs(m3)


    }, [logs])

    console.log(m1Logs)
    return (
        <div className="calendar-container">
            <div className="calendar">
                <h5>Recent Logs</h5>
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date(year, currentMonthIndex-2, 1)} logs={m1Logs}/>
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date(year, currentMonthIndex-1, 1)} logs={m2Logs}/>
                <Month viewSwitch={viewSwitch} monthOriginDate={today} logs={m3Logs}/>
            </div>
            {viewState === true &&
                <div className="modal-container">
                    <div onClick={viewSwitch} className="dimmed-bg" />
                    <DayModal viewSwitch={viewSwitch} logs={logs[modalDate]} date={modalDate}/>
                </div>
            }
        </div>
    );
};

export default Calendar;

