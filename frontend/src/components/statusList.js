import React, { useState } from "react";
import '../styles/statusList.css'

//Contacted, Accepted, Reacted, Meeting scheduled, and Applied.

const StatusList = () => {
    const [chosenStatus, setChosenStatus] = useState()

    const list = ["Contacted", "Accepted", "Reacted", "Meeting Scheduled", "Applied"]
    const classNameList = ["Contacted", "Accepted", "Reacted", "MeetingScheduled", "Applied"]
    //const statuses = {list?.length ? list.map((statusName, index) => <div className={classNameList[index]}>{statusName}</div>) : null}

    return (
        <div className="DropdownContainer">
            {list?.length ? list.map((statusName, index) => <div className={classNameList[index]}>{statusName}</div>) : null}
        </div>
    )
}

export default StatusList