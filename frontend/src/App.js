import './styles/App.css';
import TopMenuBar from "./components/topMenuBar.js";
import SideMenuBar from "./components/sideMenuBar";
import LeadTable from './components/leadTable';

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
                    </div>
                </div>
            </div>
            {/*<div className="App grid grid-cols-12 grid-rows-6">
                <div className="TopMenuBarBox">
                    <TopMenuBar />
                    text
                </div>
                <div className="SideMenuBarBox col-start-1 col-span-1 row-start-1 row-span-8">
                    Here text
                </div>
                <header className="App-header grid col-span-7 col-start-2 row-start-2 row-span-7">
                    Learn React
                </header>
            </div>*/}
            {/*<ul className="grid grid-rows-[200px_minmax(900px,_1fr)_100px] grid-flow-row auto-rows-min">
                <li className="column-10 col-start-2 col-span-11 row-start-1 row-span-1 bg-blue-400 rounded-lq shadow-x1"><div className="h-24"> <TopMenuBar /> </div></li>
                <li className="bar col-start-1 col-span-1 row-start-1 row-span-6 bg-blue-600 rounded-lq shadow-x1"><div className="h-24"> 2 </div></li>
                <li className="col-start-2 col-span-11 row-start-2 row-span-5 bg-blue-200 rounded-lq shadow-x1"><div className="h-24"> 3 </div></li>
            </ul>*/}
        </div>
    );
}

export default App;
