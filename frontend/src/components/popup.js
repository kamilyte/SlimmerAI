import React, {useState} from "react"
import '../styles/popup.css'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from "@mui/material/colors";
import Rating from '@mui/material/Rating';
import DoneIcon from '@mui/icons-material/Done';
import PushPinIcon from '@mui/icons-material/PushPin';
import TextField from '@mui/material/TextField';
import Note from "./note";
import StarRating from "./starRating";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StatusList from "./statusList";

const Popup = () => {
    const [popup, setPopup] = useState(true)
    const [isWriteDisabled, setIsWriteDisabled] = useState(true)

    const openToWork = true;

    const handleCloseClick = () => {
        setPopup(false)
    }
    
    const handlePopupClick = e => {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            setPopup(false)
        }
    }

    const onKeyDownHandler = e => {
        if (e.keyCode === 13) {
            setIsWriteDisabled(true)
            //add hook function to add notes
        }
    }

    const handleNotesClick = () => {
        setIsWriteDisabled(false)
    }

    const name = "StatusChip"
    
        return (
            popup && ( 
            <div className="Popup" onClick={handlePopupClick} id="popup-background">
                <div className="PopupCard">
                    <IconButton className="ClosePopup" size="small" onClick={handleCloseClick}>
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                    <div className="Popup-profile">
                        <h2>SS</h2>
                    </div>
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
                    <div className="Rating">
                        <h2>RANKING</h2>
                        <StarRating />
                    </div>
                    <div className="OpenToWork">
                        <h2>OPEN TO WORK</h2>
                        <DoneIcon color={openToWork ? "success" : "error"}/>
                    </div>
                    <StatusList/>
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
                    <div className="Notes">
                        <PushPinIcon className="NotesIcon" fontSize="small"/>
                        <h2>Notes</h2>
                        <img></img>
                    </div>
                    <div onClick={handleNotesClick}>
                        <textarea className="AddNotes" onKeyDown={onKeyDownHandler} disabled={isWriteDisabled} placeholder="Add a note..."></textarea>
                    </div>
                    <div className="NotesContent">
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                    </div>
                    <dl className="WorkContent">
                        <dt className="WorkListContainer">
                            <div className="CompanyEmployeeRangeLeft">
                                Company Employee Range:
                            </div>
                            <div className="CompanyEmployeeRangeRight">
                                1000-1500
                            </div>
                        </dt>
                        <dt className="WorkListContainer">
                            <div className="CompanyIndustryLeft">
                                Company Industry:
                            </div>
                            <div className="CompanyIndustryRight">
                                Retail
                            </div>
                        </dt>
                        <dt className="WorkListContainer">
                            <div className="CompanySpecialtiesLeft">
                                Company Specialties:
                            </div>
                            <div className="CompanySpecialtiesRight">
                                Athletic shoes, apparel
                            </div>
                        </dt>
                        <dt className="WorkListContainer">
                            <div className="CompanyInPositionLeft">
                                In Position:
                            </div>
                            <div className="CompanyInPositionRight">
                                2 years 8 months
                            </div>
                        </dt>
                        <dt className="WorkListContainer">
                            <div className="CompanyTypeLeft">
                                Company Type:
                            </div>
                            <div className="CompanyTypeRight">
                                Public Company
                            </div>
                        </dt>
                        <dt className="WorkListContainer">
                            <div className="CompanyProspect">
                                Company Description:
                            </div>
                        </dt>
                        <dt className="LargeContainer">
                            <div className="CompanyProspectContent">
                            NIKE, Inc., named for the Greek goddess of victory, is the world's leading designer, marketer, and distributor of authentic athletic footwear, apparel, equipment, and accessories for a wide variety of sports and fitness activities. 
                            </div>
                        </dt>
                        <dt className="WorkListContainer">
                            <div className="CompanyProspect">
                                Prospect Headlight:
                            </div>
                        </dt>
                        <dt className="LargeContainer">
                            <div className="CompanyProspectContent">
                            As a product manager, I strive for a user centric approach with a clear focus on UX and data driven decision making (A/B testing, usability testing, customer interviews, market research, customer journey mapping, insights from customer service or feedback tools). 
                            </div>
                        </dt>
                    </dl>
                    
                </div> 
            </div>)
        )
    
}

export default Popup