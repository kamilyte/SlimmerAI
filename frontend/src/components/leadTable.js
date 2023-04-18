import React, {useEffect, useState} from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material"
import FetchLeadsRequest from "../functions/fetchLeadsRequest";
import '../styles/table.css';
import StarButton from "./starButton";
import LinkIcon from '@mui/icons-material/Link';

function LeadTable() {
    const [leadList, setLeadList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await FetchLeadsRequest(setLeadList)
        };

        fetchData()
    }, []);

    const [isFilled, setIsFilled] = useState(false)


    function LeadTable() {
        if (leadList != null) {
            console.log(leadList.length + " length list");
            if (leadList.length > 0) {
                console.log("Displaying " + leadList.length + " Leads")
                return <> {
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="lead table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Profile</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Ranking</TableCell>
                                    <TableCell>Position</TableCell>
                                    <TableCell>Linkedin</TableCell>
                                    <TableCell>Company</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="LeadDataTableBody">
                                {leadList.map((row) => (
                                        <TableRow
                                        key={row.id}
                                        sx={{'&:last-child td, &:last-child th': { border: 0 }}}>
                                            <TableCell>{row.profile_picture}</TableCell>
                                            <TableCell>{row.firstname}</TableCell>
                                            <TableCell>{row.lastname}</TableCell>
                                            <TableCell> <StarButton /> </TableCell>
                                            <TableCell>{row.position}</TableCell>
                                            <TableCell>
                                                <a href={row.linkedin} target="_blank" rel="noreferrer">
                                                    <IconButton>
                                                        <LinkIcon />
                                                    </IconButton>
                                                </a>
                                            </TableCell>
                                            <TableCell>{row.company}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                } </>
            } else {
                console.log("Displaying No Leads")
                return (
                    <div>
                            Nothing found
                    </div>
                )
            }
        }
    }
    return (
        <div>
            <LeadTable/>
        </div>
    );
}

export default LeadTable