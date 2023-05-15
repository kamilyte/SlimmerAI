import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import '../styles/searchBar.css'

//use react hook
const filterData = (query, data) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) => d.toLowerCase().includes(query));
    }
  };

  //use react hook
const data = [
  ];

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const dataFiltered = filterData(searchQuery, data) //use react hook in place 
    


    return (
        <div className="SearchBar">
            <form className="SearchForm">
                <TextField id="search-bar" className="text" onInput={(e) => {setSearchQuery(e.target.value)}}  variant="outlined" placeholder ="Search..." size="small" 
                inputProps={{ style: { height:"14px", width: "20vw"}, }}/>
                <IconButton type="submit" aria-label="search" size="small">
                    <SearchIcon  fontSize="inherit"/>
                </IconButton>
            </form>
        </div>
    )
}

export default SearchBar