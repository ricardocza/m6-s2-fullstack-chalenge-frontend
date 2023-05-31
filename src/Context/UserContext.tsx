import React, { createContext, useState } from "react";

interface iUserContext {
    userLoggedIn: boolean
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

interface iUserProps {
    children: React.ReactNode
}
export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({children}: iUserProps) => {
    const [userLoggedIn, setUserLoggedIn] = useState(true as boolean)

    return <UserContext.Provider value={
        {
            userLoggedIn,
            setUserLoggedIn
        }
    }>{children}</UserContext.Provider>
}