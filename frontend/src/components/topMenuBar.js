import React, {Component, useEffect, useState} from "react"
import '../styles/topMenuBar.css';
import dotDropDown from "../resources/dotDropDown.svg";
import SearchBar from "./searchBarComponent";
import Filter from "./filter";
import { Grid } from "@mui/material";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

class TopMenuBar extends Component {
    state = {clicked: false};

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        console.log("Clicked Now")
    }


    render() {
        return (
                <Box className={this.state.clicked ? "TopMenuBarExpandedContent" : "TopMenuBar"}>
                <Grid container spacing={2}>
                    <Grid item xs={5.5}>
                        <SearchBar/>
                    </Grid>
                    <Grid item xs>
                        <Filter/>
                    </Grid>
                    <Grid item xs>
                        <Filter/>
                    </Grid>
                    <Grid item xs>
                        <Filter/>
                    </Grid>
                    <Grid item xs={2}>
                        <ButtonGroup variant="outlined" sx={{marginTop:"0.6vw", height: "2vw", width: "10vw", position: "relative"}}>
                            <Button sx={{backgroundColor: "#212121", borderColor: "#212121", color: "white", "&:hover": {backgroundColor: '#424242', borderColor: '#212121'},}}>Clear</Button>
                            <Button sx={{backgroundColor: "#212121", borderColor: "#212121", color: "white", "&:hover": {backgroundColor: '#424242', borderColor: '#212121'}}}>Apply</Button>
                        </ButtonGroup>
                    </Grid>
                    </Grid>
                    {this.state.clicked && (
                    <Grid container spacing={2}>
                        <Grid item xs>
                        <Filter/>
                    </Grid>
                    <Grid item xs>
                        <Filter/>
                    </Grid>
                    <Grid item xs>
                        <Filter/>
                    </Grid>
                    <Grid item xs>
                        <Filter/>
                    </Grid>
                    <Grid item xs>
                        <Filter/>
                    </Grid>
                    <Grid item xs>
                        <Filter/>
                    </Grid> 
                    </Grid>)}
                    <Box sx={{
                    width: "100%",
                    height: "1vw",
                    position: "absolute",
                    borderRadius: "5px",
                    bottom: "0px", "&:hover": {
                        backgroundColor: '#f5f5f5'
                      },
                    }} onClick={this.handleClick}>
                        <Stack>
                            <img></img>
                            {this.state.clicked ? <KeyboardArrowUpIcon sx={{position: "relative", left: "50%", paddingBottom: "0.5vw"}}/> : <KeyboardArrowDownIcon sx={{position: "relative", left: "50%", paddingBottom: "0.5vw"}}/>}
                        </Stack>
                    </Box>
                </Box>
        )

    }
}

export default TopMenuBar

//9 filters