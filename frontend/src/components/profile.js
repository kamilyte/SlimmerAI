import React, {useEffect, useState, useRef} from "react"
import '../styles/table.css'
import Popup from "./popup";
import { Avatar } from "@mui/material";
import { deepPurple } from '@mui/material/colors';

const Profile = (props) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleProfileClick = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    const handleProfileEnter = () => {
        setIsPopupOpen(false)
    }

    useEffect(() => {

        let handler = (e) => {
            if (e.currentTarget.id === "popup") {
                setIsPopupOpen(false)
            }
        }

        document.body.addEventListener('click', handler)
        return () => (document.body.removeEventListener('click', handler))
    })

    return (
        <div>
        <Avatar sx={{ bgcolor: deepPurple[500] }} onClick={handleProfileClick} onMouseEnter={handleProfileEnter}>
            {props.initials}
        </Avatar>
        {
            isPopupOpen && (<Popup />)
        }
        </div>
    )

}

export default Profile