import React, {Component} from "react"
import Chip from "@mui/material/Chip";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/filter.css'

//create filter box style
//integrate with top menu bar functionality

//filter box has click down 
//when click down pressed -> reveal options
//if any pressed -> drop down to reveal options
//has option to clear filter at the bottom of filter options
//refreshes search after each filter chosen
//needs hooks to receive all the different filters

//theres a main space for filter -> whichever one is chosen is added to a list of array filters
//

const names = [
    "Some filter",
    "Some filter",
    "Some filter",
    "Some filter",
    "Some filter",
    "Some filter",
    "Some filter",
    "Some filter",
    "Some filter",
];


class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filtersChosen: [],
            filterOpen: false
        }
    }

    returnFilters = () => {
        return this.state.filtersChosen
    }

    handleDropDown = () => {
        this.setState({filterOpen: !this.state.filterOpen})
      };

    render () {
        return (
            <div className="Chip">
                <Chip 
                 variant="outlined" label="Filter" onDelete={this.handleDropDown} deleteIcon={this.state.filterOpen ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>} sx={{borderRadius: 1}}
                />
                {this.state.filterOpen && (
                    <div className="DropDown">
                        {names.map((name) => (
                        <MenuItem key={name} value={name} style={{ fontSize: '0.9vw' }}>
                            {name}
                        </MenuItem>
                        ))}
                    </div>
                )}
                
            </div>
        )
        
    }
}

export default Filter
