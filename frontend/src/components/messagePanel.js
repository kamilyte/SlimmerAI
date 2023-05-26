import React from "react"
import Message from "./message"
import '../styles/messagePanel.css';

function MessagePanel() {
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
    }

    //add id into the <Message> as a prop 
    return (
        <div className="container">
            <div className="Header">
                <h2>Messages</h2>
                <img></img>
                <button className="Button" onClick={onAddMessageClick}> Add Message </button>
            </div>
            {textList?.length ? textList.map(txt => <Message text={txt} />) : null}
        </div>
    )
}

export default MessagePanel

