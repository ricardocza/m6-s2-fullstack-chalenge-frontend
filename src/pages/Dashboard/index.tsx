import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { InputField } from "../../components/InputField"
import { StyledDashboard } from "./style"
import { Options } from "../../components/Options"
import { useState } from "react"

export const Dashboard = () => {
    const [client, setClient] = useState(false as boolean) 
    const [contact, setContact] = useState(false as boolean) 
    const navigate = useNavigate()

    const handleLogout = () => {
        console.log("quitou")
        navigate('/')
    }
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