import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import "./LoginPage.css"

function LoginPage() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password).then(
            auth => { history.push("/") }
        ).catch(err => alert(err.message))
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                if (auth) {
                    history.push("./")
                }
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="login__logo" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in tempore, nostrum rerum voluptas iure!</p>
                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default LoginPage
