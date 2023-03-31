import React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material"
import LinkIcon from '@mui/icons-material/Link';

function createData(profile, name, ranking, industry, linkedin, leadList) {
    return { profile, name, ranking, industry, linkedin, leadList }
}

const leads = [
    createData('Profile', 'Jane', '3 stars', 'Retail', "https://www.google.com/", 'E-commerce')
]

const LeadTable = () => {

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
                            <TableCell component="th" scope="row">{lead.profile}</TableCell>
                            <TableCell>{lead.name}</TableCell>
                            <TableCell>{lead.ranking}</TableCell>
                            <TableCell>{lead.industry}</TableCell>
                            <TableCell>
                                <a href={lead.linkedin} target="_blank" rel="noreferrer">
                                    <IconButton>
                                        <LinkIcon />
                                    </IconButton>
                                </a>
                            </TableCell>
                            <TableCell>{lead.leadList}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default LeadTable