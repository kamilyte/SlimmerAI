import React, {Component} from "react"
import Chip from "@mui/material/Chip";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import '../styles/filter.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

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

const handleDropDown = () => {
    this.setState({filterOpen: !this.state.filterOpen})
};

const filter = ({filterHeaderStyled, filterHeaderUnstyled, filterTracker, index, uniqueFilterList}) => {
    console.log(uniqueFilterList)

    let filterOptions = (eval("uniqueFilterList." + filterHeaderUnstyled))

    return <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">{filterHeaderStyled}</InputLabel>
                    <Select
                        value = {[]}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label={filterHeaderStyled}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {filterOptions.map((value, index) => (
                            <MenuItem value={value}> {value} </MenuItem>
                        ))}
                    </Select>
        </FormControl>
        </div>
}
export default filter

/**
 *
 *                         {filterHeader.map((value, index) => (
 *                             <MenuItem value={value}> {value} </MenuItem>
 *                         ))}
 *  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
 *                     {filterHeaders.map((filterHeader) => (
 *                         <InputLabel id="demo-simple-select-standard-label">{filterHeader}</InputLabel>,
 *                         <Select
 *                             value = {[]}
 *                             labelId="demo-simple-select-standard-label"
 *                             id="demo-simple-select-standard"
 *                             onChange={this.handleDropDown}
 *                             label={filterHeader}
 *                         >
 *                             <MenuItem value="">
 *                                 <em>None</em>
 *                             </MenuItem>
 *
 *                         </Select>
 *                     ))}
 *                 </FormControl>
 */
