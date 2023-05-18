import React, {Component, useEffect, useState} from "react"
import '../styles/topMenuBar.css';
import dotDropDown from "../resources/dotDropDown.svg";
import SearchBar from "./searchBarComponent";
import Filter from "./filter";
import { Grid } from "@mui/material";
import FetchFilterListRequest from "../functions/fetchFilterListRequest";
import FetchUniqueFiltersRequest from "../functions/fetchUniqueFilters";

const filterTracker = [
    [],
    []
]

function TopMenuBar (){
    const [filterList, setFilterList] = useState([]);
    const [uniqueFilterList, setUniqueFilterList] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        await FetchFilterListRequest(setFilterList)
        await FetchUniqueFiltersRequest(setUniqueFilterList)
    };

    fetchData()
    }, []);


    function TopMenuBar() {
        const [state, setState] = useState(false)
        let styled = []
        let unstyled = []
        if (filterList != null) {
            styled = filterList.styled
            unstyled = filterList.unstyled
            console.log(styled)
            console.log(unstyled)
        }

        let handleClick = () => {
            setState({ clicked: !state.clicked })
            console.log("Clicked Now")
        }

        if (styled != null) {
                return <div className="TopMenuBarBox">
                    <div className={state.clicked ? "TopMenuBarExpandedContent" : "TopMenuBar"}>
                        <Grid container spacing={3}>
                            <Grid xs={6}>
                                <SearchBar> </SearchBar>
                            </Grid>
                            {styled.map((filterHeaderStyled, index) => (
                                <Grid key={filterHeaderStyled}>
                                    <Filter filterHeaderStyled={filterHeaderStyled} filterHeaderUnstyled={unstyled[index]} filterTracker={filterTracker} index={index} uniqueFilterList={uniqueFilterList}/>
                                </Grid>
                            ))}
                        </Grid>
                        <span className="TopBarDropDownSelection place-content-center">
                        <button type="button" onClick={handleClick}
                                className="TopBarDropDownButton place-content-center">
                            <img className="DropDownIcon" src={dotDropDown} alt="3 Dot Dropdown Icon"/>
                        </button>
                    </span>

                    </div>
                </div>
        }
    }
    return (
        <div>
            <TopMenuBar/>
        </div>
    );
}

export default TopMenuBar