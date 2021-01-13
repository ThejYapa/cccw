import React, {Component}
from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from "./views/About";
import New from "./views/New";
import Remove from "./views/Remove";
// import Monitor from "./views/Monitor";
import Health from "./views/Health";


export default function App() {
    return (
        <Router>
            <div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/new">New</Link>
                        </li>
                        <li>
                            <Link to="/remove">Remove</Link>
                        </li>
                        <li>
                            <Link to="/health">Health</Link>
                        </li>

                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route path="/new">
                        <New/>
                    </Route>
                    <Route path="/remove">
                        <Remove />
                    </Route>
                    <Route path="/health">
                        <Health />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

