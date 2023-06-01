import React, { createContext, useState } from "react";

interface iUserContext {
    userLoggedIn: boolean
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    token: string
    setToken: React.Dispatch<React.SetStateAction<string>>
}

interface iUserProps {
    children: React.ReactNode
}
export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({children}: iUserProps) => {
    const [userLoggedIn, setUserLoggedIn] = useState(true as boolean)
    const [token, setToken] = useState("" as string)

    return <UserContext.Provider value={
        {
            userLoggedIn,
            setUserLoggedIn,
            token,
            setToken
        }
    }>{children}</UserContext.Provider>
}