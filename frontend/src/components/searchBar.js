import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import '../styles/searchbar.css'

const SearchBar = ({setSearchQuery}) => {


    return (
        <div className="SearchBar">
            <form>
                <TextField id="search-bar" className="text" onInput={(e) => {setSearchQuery(e.target.value)}}  variant="outlined" placeholder ="Search..." size="small" 
                inputProps={{ style: { height:"14px", width: "20vw"}, }}/>
                <IconButton type="submit" aria-label="search" sx={{position: "relative"}}>
                    <SearchIcon  fontSize="inherit" sx={{position: "relative", fontSize:"2vw", paddingBottom: "0.5vw"}}/>
                </IconButton>
            </form>
        </div>
    )
}

export default SearchBar