import React, { useState } from "react"
import '../styles/message.css';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function Message({id, text}) {
    const [messageText, setMessageText] = useState(text)
    const [isCheckDisabled, setIsCheckDisabled] = useState(true)
    const [isWriteDisabled, setIsWriteDisabled] = useState(true)

    const onDeleteClick = () => {
        //add hook function for deleting messages
    }

    const onEditClick = () => {
        setIsWriteDisabled(false)
        setIsCheckDisabled(false)
    }

    const onCheckClick = () => {
        if (!isCheckDisabled) {
            setIsWriteDisabled(true)
            setIsCheckDisabled(true)
            //add hook function for updating message
        }
    }

    const handleMessageChange = event => {
        setMessageText(event.target.value)
    }

    const onCopyClick = () => {
        if (isWriteDisabled) {
            navigator.clipboard.writeText(messageText)
        }
    }

    return (
        <div className="Message">
            <div onClick={onCopyClick}>
                <textarea className="MessageButton" value={messageText} onChange={handleMessageChange} disabled={isWriteDisabled}>
                    {messageText}
                </textarea>
            </div>
            <div className="Icon">
                <IconButton onClick ={onCheckClick} disabled={isCheckDisabled} color="success" size="small">
                    <CheckCircleOutlineIcon fontSize="inherit"/>
                </IconButton>
                <IconButton onClick ={onEditClick} size="small">
                    <EditIcon fontSize="inherit"/>
                </IconButton>
                <IconButton onClick ={onDeleteClick} size="small">
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Message