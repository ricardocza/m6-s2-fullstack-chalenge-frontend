import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Options } from "../../components/Options"
import { StyledUser } from "./style"
import { UpdateModal } from "../../components/UpdateModal"
import { useState } from "react"

export const User = () => {
    const navigate = useNavigate()
    
    const [updateModal, setUpdateModal] = useState(false as boolean)

    const handleLogout = () => {
        console.log("quitou")
        navigate('/')
    }

    const handleModal = () => {
        setUpdateModal(true)
    }

    return <StyledUser>
        <Header/>
        <main>
            <Hero/>
            <section>
                <h2>Olá, Fulano</h2>
                <p>Você possui atualmente 69 clientes</p>
                <p>Seus clientes possuem 420 contatos</p>
                <Link to={'/dashboard'}>Voltar para a dashboard?</Link>
            </section>
        </main>
        <div>
            <Button onClick={handleModal} text="Atualizar dados"></Button>
            <Button onClick={handleLogout} text="Logout"></Button>
        </div>
        {
            updateModal
            ?
            <UpdateModal setUpdateModal={setUpdateModal}/>
            :
            null
        }
        
        <Footer/>
    </StyledUser>
}