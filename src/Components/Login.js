import React, { useState, useEffect } from 'react'
import { auth } from '../Firebase/firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
    const [user, setUser] = useState(null)
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((response) => console.log(setUser(response)))
            .catch((error) => console.log(error))

    }
    console.log(user);

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         setUser(user);
    //     })
    // }, [])
    return (
        <div>

            {/* {
                user.length !== null ? user.email
                    : <button className="btn-warning" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in</button>
            } */}
        </div>
    )
}

export default Login
