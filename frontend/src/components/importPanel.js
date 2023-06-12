import React from "react"
import '../styles/importPanel.css';

function ImportPanel() {

    const onImportClick = async() => {
        let [fileHandle] = await window.showOpenFilePicker()
        const fileName = fileHandle.name
        const splitArray = fileName.split('.')
        const fileType = splitArray[1]
        if (fileType === "csv") {
            //add hook function to upload csv
        }
    }

    return (
        <div className="container">
            <div className="Title">
                <h2>Import Leads</h2>
                <img></img>
                <button onClick={onImportClick} className="ImportButton">Choose File</button>
            </div>
        </div>
    )
}

export default ImportPanel