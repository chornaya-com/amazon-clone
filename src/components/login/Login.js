import React from "react";
import * as cn from "./Login.module.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../firebase";

export function Login() {
    const history = useHistory();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/');
            })
            .catch(event => alert(event.message));
    }

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/');
            })
            .catch(event => alert(event.message()));
    }

    return (
        <div className={cn.login}>
            <Link to="/">
                <img
                    className={cn.loginLogo}
                    src="https://purepng.com/public/uploads/medium/amazon-logo-rgp.png"
                    alt=""/>
            </Link>

            <div className={cn.loginContainer}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} className={cn.loginSignInButton} type="submit">Sign in</button>
                </form>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet atque cum fugit harum iure nam, nesciunt nihil quia voluptates.
                    Architecto, dolore, provident.</p>
                <button onClick={register} className={cn.loginRegisterButton}>Create your Amazon Account</button>
            </div>
        </div>
    );
}