import React, { useState } from "react"
import '../styles/message.css';


function Message({id, text}) {
    const [messageText, setMessageText] = useState(text)


    return (
        <button className="MessageButton" >
            {text}
        </button>
    )
}

export default Message

