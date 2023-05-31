import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { InputField } from "../../components/InputField"
import { StyledRegister } from "./style"

export const Register = () => {
    
    return <StyledRegister>
        <Header/>
        <main>
            <Hero/>
            <form>
                <InputField placehoder="Digite seu nome" label="Nome" type="text"/>
                <InputField placehoder="Digite seu sobrenome" label="Sobrenome" type="text"/>
                <InputField placehoder="Digite seu email" label="Email" type="text"/>
                <InputField placehoder="Digite sua senha" label="Password" type="password"/>
                <Button text="Cadastrar">{}</Button>
                <Link to={'/'}>
                    <Button text="Voltar ao Login">{}</Button>
                </Link>

            </form>
        </main>
        <Footer/>
    </StyledRegister>
}