import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { InputField } from "../../components/InputField"
import { StyledDashboard } from "./style"
import { Options } from "../../components/Options"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { api } from "../../services/api"

export const Dashboard = () => {
    const [client, setClient] = useState(false as boolean) 
    const [contact, setContact] = useState(false as boolean) 
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        
        const getUsers = async () => {
            try {
                const response = await api.get("/user", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                
            } catch (error: any) {
                toast.error("Ocorreu um erro, faça o login novamente", {
                    type: "error",
                    isLoading: false,
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                localStorage.clear()
                navigate('/')
            }
        }
        
        getUsers()
    }, [])
    
    return <StyledDashboard>
        <Header/>
        <main>
            <Hero/>
            <section>
                <h2>Olá, Fulano</h2>
                <Button onClick={() =>{
                    setContact(false)
                    setClient(!client)
                } } text="Opções de cliente">
                    {client ? <Options/> : null}
                </Button>
                <Button onClick={() => {
                    setClient(false)
                    setContact(!contact)
                }
                    } text="Opções de contato">
                    {contact ? <Options/> : null}
                </Button>
            </section>
        </main>
        <Footer/>
    </StyledDashboard>
}