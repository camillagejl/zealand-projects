import React from 'react';
import {Lemonade} from './features/lemonade/Lemonade';
import {Home} from "./features/home/Home";
import {Navbar} from "./features/navbar/Navbar";
import {Recipes} from "./features/recipes/Recipes";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">

                <Navbar/>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/lemonade-stand">
                        <Lemonade/>
                    </Route>
                    <Route path="/recipes">
                        <Recipes/>
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;
