import React, { useState } from "react";
import '../styles/note.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const Note = () => {
    const text = "notesSome notesSome not notesnotesSome notesSome notesSome notesSome notesSome notesSome notesnotesSome notesSome notesSome notesSome notesSome notesSome notes"

    const [isDisabled, setIsDisabled] = useState(true)
    const [noteText, setNoteText] = useState(text)
    const [isWriteDisabled, setIsWriteDisabled] = useState(true)

    var date = new Date()
    var formattedDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(date)

    const handleNoteEnter = () => {
        setIsDisabled(false)
    }

    const handleNoteLeave = () => {
        setIsDisabled(true)
    }

    const onDeleteClick = () => {
        //add hook function to delete note from database
    }

    const onEditClick = () => {
        setIsWriteDisabled(false)
    }

    const handleNoteChange = event => {
        setNoteText(event.target.value)
    }

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
            setIsWriteDisabled(true)
            //add hook function to update note text
        }
    }

    return (
        <div className="SingleNote" onMouseEnter={handleNoteEnter} onMouseLeave={handleNoteLeave}>
            <IconButton className="NoteDelete" onClick={onDeleteClick} size="small" disabled={isDisabled}>
                <DeleteIcon fontSize="inherit"/>
            </IconButton>
            <IconButton className="NoteEdit" onClick={onEditClick} size="small" disabled={isDisabled}>
                <EditIcon fontSize="inherit"/>
            </IconButton>
            <div className="NoteProfile">
                <h2>
                    SS
                </h2>
            </div>
            <h1>Sarah</h1>
            <textarea className="SingleNoteBox" onKeyDown={onKeyDownHandler} value={noteText} onChange={handleNoteChange} disabled={isWriteDisabled}>
                {noteText}
            </textarea>
            <h3>{formattedDate}</h3>
        </div>
    )
}

export default Note