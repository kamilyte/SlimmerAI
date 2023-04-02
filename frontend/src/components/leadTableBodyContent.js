import React from "react"
import {IconButton, TableBody, TableCell, TableRow} from "@mui/material";
import StarButton from "./starButton";
import LinkIcon from "@mui/icons-material/Link";
import LeadTableRow from "./leadTableRow";
function LeadTableBodyContent(props) {
    console.log(props)
    props.leadList.map((lead, index, key = lead.id) => {
        return <>(
            <TableRow key={lead.profile_picture} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{lead.profile_picture}</TableCell>
                <TableCell>{lead.firstname}</TableCell>
                <TableCell>
                    <StarButton/>
                </TableCell>
                <TableCell>{lead.company}</TableCell>
                <TableCell>
                    <a href={lead.linkedin} target="_blank" rel="noreferrer">
                        <IconButton>
                            <LinkIcon />
                        </IconButton>
                    </a>
                </TableCell>
                <TableCell>{lead.lead_list}</TableCell>
            </TableRow>)
        )</>
    })
}

export default LeadTableBodyContent