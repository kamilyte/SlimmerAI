import React, {Component} from "react"
import '../styles/sideMenuBar.css';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from "@mui/material";
import '../styles/message.css'
import Message from "./message";



class SideMenuBar extends Component {
    state = {clicked: {
        importIcon: false,
        messagesIcon: false,
        savedSearchIcon: false,
        shareIcon: false,
    }};

    handleImportClick = () => {
        if (!this.state.clicked.importIcon) {
            this.setState({ clicked: {messagesIcon: false }})
            this.setState({ clicked: {savedSearchIcon: false }})
            this.setState({ clicked: {shareIcon: false }})
        }
        this.setState({ clicked: {importIcon: !this.state.clicked.importIcon}})
    }

    handleMessagesClick = () => {
        if (!this.state.clicked.messagesIcon) {
            this.setState({ clicked: {importIcon: false }})
            this.setState({ clicked: {savedSearchIcon: false }})
            this.setState({ clicked: {shareIcon: false }})
        }
        this.setState({ clicked: {messagesIcon: !this.state.clicked.messagesIcon}})
    }

    handleSavedSearchClick = () => {
        if (!this.state.clicked.savedSearchIcon) {
            this.setState({ clicked: {importIcon: false }})
            this.setState({ clicked: {messagesIcon: false }})
            this.setState({ clicked: {shareIcon: false }})
        }
        this.setState({ clicked: {savedSearchIcon: !this.state.clicked.savedSearchIcon}})
    }

    handleShareClick = () => {
        if (!this.state.clicked.shareIcon) {
            this.setState({ clicked: {importIcon: false }})
            this.setState({ clicked: {messagesIcon: false }})
            this.setState({ clicked: {savedSearchIcon: false }})
        }
        this.setState({ clicked: {shareIcon: !this.state.clicked.shareIcon}})
    }

    render() {
        return (
            <div className="SideMenuBar">
                <div className="SideMenuBarAlwaysEnabled">
                    <button type="button" onClick={this.handleImportClick} className="SideBarIcon place-content-center">
                        <IconButton aria-label="import" size="large">
                            <ImportContactsIcon fontSize="inherit" />
                        </IconButton>
                    </button>
                    <button type="button" onClick={this.handleMessagesClick} className="SideBarIcon place-content-center">
                        <IconButton aria-label="messages" size="large">
                            <InsertCommentIcon fontSize="inherit" />
                        </IconButton>
                    </button>
                    <button type="button" onClick={this.handleSavedSearchClick} className="SideBarIcon place-content-center">
                        <IconButton aria-label="saved-search" size="large">
                            <SavedSearchIcon fontSize="inherit" />
                        </IconButton>
                    </button>
                    <button type="button" onClick={this.handleShareClick} className="SideBarIcon place-content-center">
                        <IconButton aria-label="share" size="large">
                            <ShareIcon fontSize="inherit" />
                        </IconButton>
                    </button>
                </div>
                <div className={this.state.clicked.importIcon ? "SideBarIconExpandedContent" : "NoExpansion" }>
                    content 1
                </div>
                <div className={this.state.clicked.messagesIcon ? "SideBarIconExpandedContent" : "NoExpansion" }>
                    <Message text="just something that is written here idk i just need it to be long just something that is written here idk i just need it to be long
                    just something that is written here idk i just need it to be long
                    just something that is written here idk i just need it to be long
                    just something that is written here idk i just need it to be long
                    just something that is written here idk i just need it to be long" />
                </div>
                <div className={this.state.clicked.savedSearchIcon ? "SideBarIconExpandedContent" : "NoExpansion" }>
                    content 3
                </div>
                <div className={this.state.clicked.shareIcon ? "SideBarIconExpandedContent" : "NoExpansion" }>
                    content 4
                </div>
            </div>
        )
    }
}
export default SideMenuBar