import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAy7tG7FETo48WUJpAeVzi3xkvlNm1ZN9I",
    authDomain: "movieden-8e228.firebaseapp.com",
    projectId: "movieden-8e228",
    storageBucket: "movieden-8e228.appspot.com",
    messagingSenderId: "324631735802",
    appId: "1:324631735802:web:107308906ea1afc5134843",
    measurementId: "G-9W1TQRB7ZH"
};


// Initialize Firebase 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);