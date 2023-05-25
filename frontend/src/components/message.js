import React from "react"
import '../styles/message.css';

const Message = (props) => {
    
    return (
        <button className="MessageButton" >
            {props.text}
        </button>
        )
    
}

export default Message

