import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from "./components/header/Header";

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">Checkout</Route>
                    <Route path="/login">Login</Route>
                    <Route path="/">
                        <Header/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
