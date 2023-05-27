import React from "react"
import '../styles/savedSearchPanel.css';
import SavedSearch from "./savedSearch";

function SavedSearchPanel() {
    return (
        <div className="container">
            <div className="Heading">
                <h2>Saved Searches</h2>
                <img></img>
            </div>
            <SavedSearch />
        </div>
    )
}

export default SavedSearchPanel