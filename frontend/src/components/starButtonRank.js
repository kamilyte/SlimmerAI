import { Component } from "react";
import StarButton from "./starButton";

class StarButtonRank extends Component {
    handleClick = () => {

    }
    render() {
        return (
            <div>
                 <StarButton onClick={this.handleClick} />
                 <StarButton />
                 <StarButton />
            </div>
           
        )
    }
}

export default StarButtonRank