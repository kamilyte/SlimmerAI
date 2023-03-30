import React, {Component} from "react"
import '../styles/message.css';

class Message extends Component {
    render() {
        return (
            <button className="MessageButton" >
                {this.props.text}
            </button>
        )
    }
}

export default Message

