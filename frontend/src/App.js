import './styles/App.css';
import TopMenuBar from "./components/topMenuBar.js";
import SideMenuBar from "./components/sideMenuBar";
import LeadTable from './components/leadTable';
import Leads from './components/leads';

function App() {
    return (

        <div>
            <div className="App">
                <div className="MenuBar">
                    <SideMenuBar />
                </div>
                <div className="Contents">
                    <div className="TopMenuBarBox">
                        <TopMenuBar />
                    </div>
                    <div className="TableContent">
                        <LeadTable />
                        <Leads />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
