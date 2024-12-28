import React, {createContext, useState, useContext, useEffect} from "react";

const loginContext = createContext();

export const LoginProvider = ({children}) => {
    const [isLoggedin, setIsLoggedin] = useState(() => {
        const storedLoginState = localStorage.getItem('isLoggedIn');
        return storedLoginState === 'true'; 
    })

    useEffect(()=>{
        localStorage.setItem('isLoggedIn', isLoggedin);
    },[isLoggedin])

    const login = () => setIsLoggedin(true)
    const logout = () => setIsLoggedin(false)

    return(
        <loginContext.Provider value = {{isLoggedin, login, logout}}>
            {children}
        </loginContext.Provider>
    )
}

export const useLogin = () => useContext(loginContext)