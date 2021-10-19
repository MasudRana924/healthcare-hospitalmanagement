import { useEffect, useState } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import initializeAuthentication from './firebase.initial';
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // for name
    const [name, setName] = useState('')
    // for email
    const [email, setEmail] = useState('')
    // for pass 
    const [pass, setPass] = useState('')
    // pass 6 er kom hoile tar jonno state 
    const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)


    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)

        })
    }, [])

    const handleSignup = e => {
        console.log(email, pass)
        if (pass.length < 6) {
            setError('Password must be atleast 6 characters ')
            return
        }
        e.preventDefault()
        createNewUser(email, pass)
    }
    const handleLogin = e => {
        e.preventDefault()
        console.log(email, pass)
        processLogin(email, pass)

    }

    // new user 
    const createNewUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                setUserName()
                // register korar por email verify
                verifyEmail()
                // name register por set korar jnno


            })
            .catch(error => {
                setError(error.message)
            })
    }
    // login process 
    const processLogin = (email, pass) => {

        signInWithEmailAndPassword(auth, email, pass)
        .then(result => {
            const user = result.user
            console.log(user)
            setError('')
          })
          .catch(error => {
            setError(error.message)
          })

            
    }
    // name 
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(result => {
            // Profile updated!
            // ...
        })
    }
    // email verify 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }
    // email 
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePassChange = e => {
        setPass(e.target.value)
    }

    // handle name
    const handleName = event => {
        setName(event.target.value)

    }

    //   logout process 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() =>
                setIsLoading(false)
            )
    }
    return {
        user, googleSignIn, logOut,
        isLoading, setIsLoading, handleEmailChange, handlePassChange, handleSignup, handleName, handleLogin
    }

}
export default useFirebase