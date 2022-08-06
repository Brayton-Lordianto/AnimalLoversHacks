import { createContext } from "react";

const LoginContext = createContext({
    isLoggedIn: false,
    toggleIsLoggedIn: () => { }
});

export default LoginContext;