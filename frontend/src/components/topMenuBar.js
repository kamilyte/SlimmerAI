import React, {Component} from "react"
import '../styles/topMenuBar.css';
import dotDropDown from "../resources/dotDropDown.svg";

class TopMenuBar extends Component {
    state = {clicked: false};

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
        console.log("Clicked Now")
    }

    render() {
        return (
            <div className="TopMenuBarBox">
                <div className="TopMenuBar">
                    <div className="TopMenuBarAlwaysEnabled">
                        this is the content section
                    </div>
                    <div className={this.state.clicked ? "TopBarExpandedContent" : "TopBarDefaultContent" }>
                        content
                    </div>
                    <span className="TopBarDropDownSelection place-content-center">
                        <button type="button" onClick={this.handleClick} className="TopBarDropDownButton place-content-center">
                            <img className="DropDownIcon" src={dotDropDown} alt="3 Dot Dropdown Icon" />
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default TopMenuBar