import React from "react";
import "../styles/savedSearch.css"
import { IconButton } from "@mui/material"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

const SavedSearch = ({filterArray}) => {

    const onDeleteClick = () => {
        //hook function to delete filter
    }

    return (
        <div className="SavedSearch">
            <IconButton onClick={onDeleteClick} className="DeleteSearch">
                <RemoveCircleIcon color="error"/>
            </IconButton>
        </div>
    )
}

export default SavedSearch