import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {Checkout} from "./components/checkout/Checkout";
import {Login} from "./components/login/Login";
import {StateContext} from "./components/StateProvider";
import {auth} from "./components/firebase";
import {initialState, reducer} from "./components/reducer";

function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

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
        <StateContext.Provider value={[state, dispatch]}>
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
        </StateContext.Provider>
    );
}

export default App;
