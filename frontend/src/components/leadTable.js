import React, {useEffect, useState} from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material"
import LinkIcon from '@mui/icons-material/Link';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarButton from "./starButton";
import {DataGrid} from "@mui/x-data-grid";
import FetchLeadsRequest from "../functions/fetchLeadsRequest";
import LeadTableBodyContent from "./leadTableBodyContent";

function LeadTable() {

    const data = [
        {
            "company": "comp",
            "firstname": "fname",
            "id": "12a",
            "lastname": "lname",
            "lead_list": "list",
            "linkedin": "linked",
            "position": "pos",
            "profile_picture": "abc",
            "ranking": null
        },
        {
            "company": "comp",
            "firstname": "fname",
            "id": "12eaaaa",
            "lastname": "lname",
            "lead_list": "list",
            "linkedin": "linked",
            "position": "pos",
            "profile_picture": "abc",
            "ranking": null
        },
        {
            "company": "comp",
            "firstname": "fname",
            "id": "12eaaap",
            "lastname": "lname",
            "lead_list": "list",
            "linkedin": "linked",
            "position": "pos",
            "profile_picture": "abc",
            "ranking": null
        },
        {
            "company": "comp",
            "firstname": "fname",
            "id": "12eas",
            "lastname": "lname",
            "lead_list": "list",
            "linkedin": "linked",
            "position": "pos",
            "profile_picture": "abc",
            "ranking": 0
        },
        {
            "company": "comp",
            "firstname": "fname",
            "id": "12ee",
            "lastname": "lname",
            "lead_list": "list",
            "linkedin": "linked",
            "position": "pos",
            "profile_picture": "abc",
            "ranking": null
        },
        {
            "company": "comp",
            "firstname": "fname",
            "id": "12efff",
            "lastname": "lname",
            "lead_list": "list",
            "linkedin": "linked",
            "position": "pos",
            "profile_picture": "abc",
            "ranking": null
        },
        {
            "company": "comp",
            "firstname": "fname",
            "id": "12kkkkl",
            "lastname": "lname",
            "lead_list": "list",
            "linkedin": "linked",
            "position": "pos",
            "profile_picture": "abc",
            "ranking": 0
        },
        {
            "company": "comp",
            "firstname": "fname",
            "id": "12ll",
            "lastname": "lname",
            "lead_list": "list",
            "linkedin": "linked",
            "position": "pos",
            "profile_picture": "abc",
            "ranking": 3
        }
    ]

    const [leadList, setLeadList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await FetchLeadsRequest(setLeadList)
        };

        fetchData()
    }, []);

    const [isFilled, setIsFilled] = useState(false)

    const handleStarClick = () => {
        setIsFilled(true)
    }

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
                                    <TableCell>Name</TableCell>
                                    <TableCell>Ranking</TableCell>
                                    <TableCell>Industry</TableCell>
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
                                            <TableCell>Rank</TableCell>
                                            <TableCell>{row.linkedin}</TableCell>
                                            <TableCell>{row.position}</TableCell>
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