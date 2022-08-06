import React, { useState } from 'react'

import LoginContext from './login-context'

const LoginProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const toggleIsLoggedIn = () => {
        setIsLoggedIn((prevState) => {
            return !prevState
        })
    }
    const loginContext = {
        isLoggedIn,
        toggleIsLoggedIn
    }
    return (
        <LoginContext.Provider value={loginContext}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider