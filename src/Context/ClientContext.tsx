import { useContext, createContext } from "react";
import {z} from "zod"
import { iCreateClient, iUpdateClient } from "../schemas/clientSchema";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

interface iClientContext {
    createClient: (object: iCreateClient) => Promise<void>
    listClients: () => Promise<void>
}

interface iClientProps {
    children: React.ReactNode
}

export const ClientContext = createContext({} as iClientContext)

export const ClientProvider = ({children}: iClientProps) => {

    const {token, setToken} = useContext(UserContext)

    const createClient = async (clientData: iCreateClient) => {
        try {
            const response = await api.post('/client', clientData, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }, 
                
            })
            console.log(response.data)
        } catch (error: any) {
            console.log(error.response.data.message)
            setToken("")
        }
    }

    const listClients = async () => {
        try {
            const response = await api.get('/client', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }, 
                
            })
            console.log(response.data)
        } catch (error: any) {
            console.log(error.response.data.message)
            setToken("")
        }
    }

    const updateClient = async (data: iUpdateClient, id: string) => {
        try {
            const response = await api.patch(`/client/${id}/`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }, 
                
            })
            console.log(response.data)
        } catch (error: any) {
            console.log(error.response.data.message)
            setToken("")
        }
    
    }

    const deleteClient = async (id: string) => {
        try {
            const response = await api.delete(`/client/${id}/`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }, 
                
            })
            console.log(response.data)
        } catch (error: any) {
            console.log(error.response.data.message)
            setToken("")
        }
    }
    return <ClientContext.Provider value={{
        createClient,
        listClients
        }}>
        {children}
    </ClientContext.Provider>
}