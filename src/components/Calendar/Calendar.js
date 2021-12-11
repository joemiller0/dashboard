import { useEffect, useState } from "react";
import { useApi } from "../../hooks/hooks";
import Month from './Month';
import DayModal from './DayModal';
import "./stylesheets/calendar.css";

const Calendar = ({ logs }) => {
    const [viewState, setViewState] = useState(false);
    const [modalDate, setModalDate] = useState("");
    // const [m1Logs, setM1Logs] = useState([]);
    // const [m2Logs, setM2Logs] = useState([]);
    // const [m3Logs, setM3Logs] = useState([]);
    // when logs update in props, the useEffect runs and updates each one of these. if they all update, then all months update which defeats the purpose of sorting them like this above.

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

    // useEffect(()=>{
    //     let m1 = {};
    //     let m2 = {};
    //     let m3 = {};

    //     Object.entries(logs).map((log, index) => {
    //         const m = parseInt(log[0].slice(5, 7))

    //         if(m-1  === currentMonthIndex-2 ){
    //             m1[log[0]] = log[1]
    //         } 
    //         if(m-1 === currentMonthIndex-1 ){
    //             m2[log[0]] = log[1]
    //         } 
    //         if(m-1 === currentMonthIndex ){
    //             m3[log[0]] = log[1]
    //         } 
    //     })
    //     setM1Logs(m1)
    //     setM2Logs(m2)
    //     setM3Logs(m3)
    // }, [logs])

    return (
        <div className="calendar-container">
            <div className="calendar">
                <h5>Recent Logs</h5>
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date(year, currentMonthIndex-2, 1)} logs={logs}/>
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date(year, currentMonthIndex-1, 1)} logs={logs}/>
                <Month viewSwitch={viewSwitch} monthOriginDate={today} logs={logs}/>
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

