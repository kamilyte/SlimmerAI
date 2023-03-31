import React, {Component} from "react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from "@mui/material";

class StarButton extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})

    }

    render() {
        return (
            <IconButton onClick={this.handleClick}>
                { this.state.clicked ? <StarIcon/> : <StarBorderIcon/>}
            </IconButton>
        )
    }
}

export default StarButton