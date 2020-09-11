import firebase from "firebase/app";
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyBa6mJx64ZQIXXsLqCdcdqD1Lfj6jSlyQk",
    authDomain: "clone-17e8e.firebaseapp.com",
    databaseURL: "https://clone-17e8e.firebaseio.com",
    projectId: "clone-17e8e",
    storageBucket: "clone-17e8e.appspot.com",
    messagingSenderId: "431334341234",
    appId: "1:431334341234:web:a07af5e0c9d166450c60eb"
});

const auth = firebase.auth();

export {auth};