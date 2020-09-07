import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">Checkout</Route>
                    <Route path="/login">Login</Route>
                    <Route path="/">Home</Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
