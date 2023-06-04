import React, { useState } from "react"
import Message from "./message"
import '../styles/messagePanel.css';
import '../styles/message.css'

function MessagePanel() {
    const [addMessage, setAddMessage] = useState(false)
    const [newMessage, setNewMessage] = useState("")

    //get hook for retrieving all messages

    const textList = []
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")
    textList.push("just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long")

    const onAddMessageClick = () => {
        //hook for creating messages
        setNewMessage("")
        setAddMessage(true)
        
    }

    const handleMessageChange = event => {
        setNewMessage(event.target.value)
    }

    const onKeyDownHandler = event => {
        if (event.keyCode === 13) {
            setAddMessage(false)
            //add hook function to add newMessage
        }
    }

    //add id into the <Message> as a prop 
    return (
        <div className="container">
            <div className="Header">
                <h2>Messages</h2>
                <img></img>
                <button className="Button" onClick={onAddMessageClick}> Add Message </button>
            </div>
            {addMessage ? (
                <textarea className="EmptyMessage" value={newMessage} onKeyDown={onKeyDownHandler} onChange={handleMessageChange}>
                    {newMessage}
                </textarea>
            ) : null}
            {textList?.length ? textList.map(txt => <Message text={txt} />) : null}
        </div>
    )
}

export default MessagePanel

