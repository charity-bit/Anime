import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig= {

    apiKey: "AIzaSyAK4G55m467t3zWs9_waywdY3mDro5BOpk",
    authDomain: "anime-33936.firebaseapp.com",
    projectId: "anime-33936",
    storageBucket: "anime-33936.appspot.com",
    messagingSenderId: "619258909340",
    appId: "1:619258909340:web:bcff280d754cec25701359"  
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth =  firebase.auth();

export {auth};

