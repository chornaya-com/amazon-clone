import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {Checkout} from "./components/checkout/Checkout";
import {Login} from "./components/login/Login";
import {useStateValue} from "./components/StateProvider";
import {auth} from "./components/firebase";

function App() {
    const [, dispatch] = useStateValue();

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                });
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                });

            }
        });
        return () => {
            unsubscribe();
        }
    }, [dispatch]);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
