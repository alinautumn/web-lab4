import React from 'react'
import AuthForm from "./form/AuthForm";

// css styles
import '../../css/general.css'
import '../../css/auth.css'

function Auth() {
    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">Laboratory work №4, variant 6233</h1>

                <div className="main__row">
                    <div className="main__left-block">
                        <AuthForm/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Auth;
