import React, { useState } from "react";
import '../styles/statusList.css'
import '../styles/status.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { IconButton } from "@mui/material";

//Contacted, Accepted, Reacted, Meeting scheduled, and Applied.

const StatusList = () => {
    const [isDropDown, setIsDropDown] = useState(false)
    const [currentState, setCurrentState] = useState("Contacted")
    const [currentStateText, setCurrentStateText] = useState("Contacted")

    const list = ["Contacted", "Accepted", "Reacted", "Meeting Scheduled", "Applied"]
    const classNameList = ["Contacted", "Accepted", "Reacted", "MeetingScheduled", "Applied"]
    //const statuses = {list?.length ? list.map((statusName, index) => <div className={classNameList[index]}>{statusName}</div>) : null}

    const onDropClick = () => {
        setIsDropDown(!isDropDown)
    }

    const onStatusClick = (index) => {
        setCurrentState(classNameList[index])
        setCurrentStateText(list[index])
        //add hook function to update status with list[index]
    }

    return (
        <div className="Status"> 
            <h2>STATUS</h2>
            <div className={currentState}>
                {currentStateText}
            </div>
            <div className="StatusDrop">
                <IconButton className="DropBox" onClick={onDropClick} size="small">
                    {isDropDown ? <ArrowDropUpIcon fontSize="inherit" /> : <ArrowDropDownIcon fontSize="inherit"/>}
                </IconButton>
            </div>
            {isDropDown && (<div className="DropdownContainer">
            {list?.length ? list.map((statusName, index) => <div className={classNameList[index]} onClick={() => onStatusClick(index)} >{statusName}</div>) : null}
            </div>)} 
        </div>
    )
}

export default StatusList

/*<div className="DropdownContainer">
                {list?.length ? list.map((statusName, index) => <div className={classNameList[index]} key={index}>{statusName}</div>) : null}
            </div>*/

            /*{isDropDown && (<div className="DropdownContainer">
            {list?.length ? list.map((statusName, index) => <div className={classNameList[index]} value={index} onClick={(event) => onStatusClick(event.target.value)} >{statusName}</div>) : null}
        </div>)} */