import { useEffect, useState } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, GithubAuthProvider } from "firebase/auth";
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
    const [isLogin, setIsLogin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)


    }
    const githubProvider = new GithubAuthProvider()
    const githubSignin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)

        })
    }, [])
    // email handle
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    // pass handle
    const handlePass = e => {
        setPass(e.target.value)
    }
    // handle name
    const handleName = event => {
        setName(event.target.value)

    }
    //  register er jonno user create 
    const createNewUser = (email, pass) => {
        if (pass.length < 6) {
            setError('pass must be 6 character')
            return
        }
       return createUserWithEmailAndPassword(auth, email, pass)
            // .then(result => {
            //     const user = result.user
            //     console.log(user)
            //     setError('')
            //     // register korar por email verify
            //     verifyEmail()
            //     // name register por set korar jnno
            //     setUserName()
            // })
            // .catch(error => {
            //     setError(error.message)
            // })
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
    // 1. register 
    // const handleRegister = e => {

    //     e.preventDefault()
    //     console.log(email, pass)
    //     isLogin ? signInProcress(email, pass) : createNewUser(email, pass)
    // }
    // 2. toogle login
    const toogleLogin = e => {
        setIsLogin(e.target.checked)
    }
    //  for signin 
    const signInProcress = (email, pass) => {
        setIsLoading(true)
     return   signInWithEmailAndPassword(auth, email, pass)

            // .then(result => {

            // })
            // .finally(() =>
            //     setIsLoading(false)
            // )


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
        isLoading, setIsLoading, error, handleEmail, handlePass, signInProcress, toogleLogin, isLogin, handleName, setError, githubSignin,createNewUser,verifyEmail,setUserName,email,pass
    }

}
export default useFirebase