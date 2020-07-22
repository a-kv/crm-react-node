import React from 'react';
import './App.scss';
import {Navbar} from "./components/Nav/Navbar";
import {GiraffePage} from "./components/GiraffePage/GiraffePage";
import {HashRouter, Route} from "react-router-dom";

function App() {
    return (
        <div className="app-wrapper">
            <HashRouter>
                <Navbar/>
                <Route path='/giraffe' render={() => <GiraffePage/>}/>
            </HashRouter>
        </div>
    );
}

export default App;
//json-server --watch db.json --port 3004