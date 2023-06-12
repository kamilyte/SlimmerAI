import React, { useState } from "react";
import '../styles/messageStatus.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { IconButton } from "@mui/material";

//Contacted, Accepted, Reacted, Meeting scheduled, and Applied.

const MessageStatus = ({value}) => {
    const [isDropDown, setIsDropDown] = useState(false)
    const [currentState, setCurrentState] = useState("MessageContacted")
    const [currentStateText, setCurrentStateText] = useState("Contacted")

    const list = ["Contacted", "Accepted", "Reacted", "Meeting Scheduled", "Applied"]
    const classNameList = ["MessageContacted", "MessageAccepted", "MessageReacted", "MessageMeetingScheduled", "MessageApplied"]
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
        <div className="MessageBox">
            <div className={currentState}>
                {currentStateText}
            </div>
            <div className="MessageStatusDrop">
                <IconButton className="MessageDropBox" onClick={onDropClick} disabled={value} size="small">
                    {isDropDown ? <ArrowDropUpIcon fontSize="inherit" /> : <ArrowDropDownIcon fontSize="inherit"/>}
                </IconButton>
            </div>
            {isDropDown && (<div className="MessageDropdownContainer">
            </div>)} 
        </div>
    )
}

export default MessageStatus