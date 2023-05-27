import React, {useState} from "react"
import '../styles/popup.css'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from "@mui/material/colors";

const Popup = () => {
    const [popup, setPopup] = useState(true)

    const handleCloseClick = () => {
        setPopup(false)
    }
    
    const handlePopupClick = e => {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            setPopup(false)
        }
    }
    
        return (
            popup && ( 
            <div className="Popup" onClick={handlePopupClick} id="popup-background">
                <div className="PopupCard">
                    <img className="Popup-profile">
                    </img>
                    <h2 className="Popup-name">
                        Name
                    </h2>
                    <h2 className="Popup-position">
                        Position @ Company
                    </h2>
                    <div className="Location">
                        <LocationOnIcon sx={{position: "absolute", color: grey[400], fontSize: "1.25vw", left: "0vw", top: "0.25vw"}}/>
                        <h2>
                            Location, Country
                        </h2>
                    </div>
                    <div className="LeadList">
                        Lead-List
                    </div>
                    <div className="Work">
                        <h2>
                            WORK
                        </h2>
                        <img>
                        </img>
                    </div>
                    <div className="WorkContent">

                    </div>
                    <IconButton className="Close" size="small" onClick={handleCloseClick}>
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                    <IconButton className="Edit" size="small">
                        <EditIcon fontSize="inherit"/>
                    </IconButton>
                </div> 
            </div>)
        )
    
}

export default Popup