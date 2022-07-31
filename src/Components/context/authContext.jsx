import React from "react";

export const authContext = React.createContext();


export function AuthContextProvider({children}){
    const [auth,setAuth] = React.useState(false)
    const handleAuth = () =>{
        setAuth(!auth);
    }
    return (
        <authContext.Provider value={{auth,handleAuth}}>
            {children}
        </authContext.Provider>
    )
}