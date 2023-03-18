import Reactm, {useState} from "react"
import '../styles/topMenuBar.css';
import dotDropDown from "../resources/dotDropDown.svg";

const TopMenuBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="TopMenuBar">
            <div className="TopBarContent">
                this is the content section
            </div>
            <span className="TopBarDropDownSelection place-content-center">
                <button type="button" onClick={()=>{setOpen(!open)}} className="TopBarDropDownButton place-content-center">
                    <img className="DropDownIcon" src={dotDropDown} alt="3 Dot Dropdown Icon" />
                </button>
            </span>
        </div>
    )
}

const handleClick = () => {
    setOpenTab(!open);
}

export default TopMenuBar