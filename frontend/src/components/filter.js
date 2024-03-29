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

const names = [
    "Some filter",
    "Some filte",
    "Some filtr",
    "Some filer",
    "Some fiter",
    "Some flter",
    "Some ilter",
    "Somefilter",
    "Som filter",
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

    addFilter = (filter) => {
        this.setState({filtersChosen: [...this.state.filtersChosen, {filter}]})
        console.log(this.state.filtersChosen)
    }

    removeFilter = (filter) => {
        this.setState({filtersChosen: this.state.filtersChosen.filter(arr => arr !== filter)})
        console.log(this.state.filtersChosen)
    }

    handleDropDown = () => {
        this.setState({filterOpen: !this.state.filterOpen})
    };

    render () {
        return (
            <div className="Chip">
                <Chip 
                 variant="outlined" label="Filter" onDelete={this.handleDropDown} deleteIcon={this.state.filterOpen ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>} sx={{borderRadius: 1, height: "2vw", width: "10vw", marginTop: "0.6vw"}}
                />
                {this.state.filterOpen && (
                    <div className="DropDown" >
                        {names.map((name) => (
                        <Stack spacing={1}>
                        <button key={name} value={name} className="item"> <h2>{name}</h2> </button>
                      </Stack>
                        ))}

                    <Stack spacing={1}> 
                        <button className="option-item"> <h2>Clear Filters</h2></button>
                    </Stack>
                    </div>
                )}
                
            </div>
        )
        
    }
}

export default Filter
