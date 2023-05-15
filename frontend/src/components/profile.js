import React, {useEffect, useState, useRef} from "react"
import '../styles/table.css'
import Popup from "./popup";

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
        <button onClick={handleProfileClick} className="Profile" onMouseEnter={handleProfileEnter}>
            <h2>
                {props.initials}
            </h2>
        </button>
        {
            isPopupOpen && (<Popup />)
        }
        </div>
    )

}

export default Profile