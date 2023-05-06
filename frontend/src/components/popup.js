import React, {Component} from "react"
import '../styles/popup.css'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from "@mui/material/colors";

class Popup extends Component {
    state = {
        popup: true
    }

    handleCloseClick = () => {
        this.setState({popup: false})
    }
    
    handlePopupClick = e => {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            this.setState({popup: false})
        }
    }

    render() {
        return (
                this.state.popup && ( 
            <div className="Popup" onClick={this.handlePopupClick} id="popup-background">
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
                    <IconButton className="Close" size="small" onClick={this.handleCloseClick}>
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                    <IconButton className="Edit" size="small">
                        <EditIcon fontSize="inherit"/>
                    </IconButton>
                </div> 
            </div>)
        )
    }
}

export default Popup