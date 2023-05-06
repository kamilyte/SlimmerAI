import React, {useEffect, useState, useRef} from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material"
import LinkIcon from '@mui/icons-material/Link';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarButton from "./starButton";
import StarButtonRank from "./starButtonRank";
import '../styles/table.css'
import Popup from "./popup";
import Profile from "./profile";
import '../styles/popup.css'

// THIS CLASS IS JUST FOR TESTING LOOK OF TABLE WHEN I DONT HAVE ACCESS TO THE DB

function createData(profile, name, ranking, industry, linkedin, leadList) {
    return { profile, name, ranking, industry, linkedin, leadList }
}

const leads = [
    createData('Profile', 'Jane', '3 stars', 'Retail', "https://www.google.com/", 'E-commerce')
]

const Leads = () => {
    const [isFilled, setIsFilled] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const buttonRef = useRef()

    const handleProfileClick = () => {
        setIsPopupOpen(!isPopupOpen)
    }

    const handlePopupClick = e => {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            setIsPopupOpen(false)
        }
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="lead table">
                <TableHead>
                    <TableRow>
                        <TableCell>Profile</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Ranking</TableCell>
                        <TableCell>Industry</TableCell>
                        <TableCell>Linkedin</TableCell>
                        <TableCell>Lead List</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leads.map((lead) => (
                        <TableRow key={lead.profile} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <button onClick={handleProfileClick} className="Profile" id="popup" >
                                    <h2>
                                        {((lead.name)[0]).concat('K')}
                                    </h2>
                                </button>
                            </TableCell>
                            <TableCell>{lead.name}</TableCell>
                            <TableCell>
                                <StarButtonRank/>
                            </TableCell>
                            <TableCell>{lead.industry}</TableCell>
                            <TableCell>
                                <a href={lead.linkedin} target="_blank" rel="noreferrer">
                                    <IconButton>
                                        <LinkIcon />
                                    </IconButton>
                                </a>
                            </TableCell>
                            <TableCell>{lead.leadList}</TableCell>
                            {
                                isPopupOpen && (
                                <div className="Popup" onClick={handlePopupClick}>
                                    <Popup/>
                                </div>)
                            }
                        </TableRow>
                        
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default Leads