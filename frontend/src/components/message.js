import React, {Component} from "react"
import '../styles/message.css';


function Message({text}) {
    return (
        <button className="MessageButton" >
            {text}
        </button>
    )
}

export default Message

