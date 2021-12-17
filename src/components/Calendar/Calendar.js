import { useState } from "react";
import { Month, DayModal } from '../components.js';
import "./stylesheets/calendar.css";

export const Calendar = ({ logs }) => {
    const [viewState, setViewState] = useState(false);
    const [modalDate, setModalDate] = useState("");

    const viewSwitch = e => {
        setViewState(!viewState)
        if (e.target.innerHTML === "x") return
        if (e.target.className === "dimmed-bg") return
        setModalDate(e.target.attributes.fulldate.value)
    }
    console.log(Array.isArray(logs[modalDate]))
    const year = new Date().getFullYear();
    const currentMonthIndex = new Date().getMonth();

    return (
        <div className="calendar-container">
            <div className="calendar">
                <h5>Recent Logs</h5>
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date(year, currentMonthIndex-2, 1)} logs={logs} />
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date(year, currentMonthIndex-1, 1)} logs={logs} />
                <Month viewSwitch={viewSwitch} monthOriginDate={new Date()} logs={logs}/>
            </div>
            {viewState === true &&
                <div className="modal-container">
                    <div onClick={viewSwitch} className="dimmed-bg" />
                    {Array.isArray(logs[modalDate]) 
                        ? <DayModal viewSwitch={viewSwitch} logs={logs[modalDate]} date={modalDate} />
                        : <DayModal viewSwitch={viewSwitch} logs={[logs[modalDate]]} date={modalDate} />
                    }
                </div>
            }
        </div>
    );
};

