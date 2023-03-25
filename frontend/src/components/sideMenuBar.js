import React, {Component} from "react"
import '../styles/sideMenuBar.css';

class SideMenuBar extends Component {
    state = {clicked: false};

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        console.log("Clicked Now")
    }

    render() {
        return (
            <div className="SideMenuBar">
                <div className="SideMenuBarAlwaysEnabled">
                    <button type="button" onClick={this.handleClick} className="SideBarIcon place-content-center">
                        click
                    </button>
                </div>
                <div className={this.state.clicked ? "SideBarIconExpandedContent" : "NoExpansion" }>
                    content
                </div>
            </div>
        )
    }
}
export default SideMenuBar