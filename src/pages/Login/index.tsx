import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { InputField } from "../../components/InputField"
import { StyledLogin } from "./style"

export const Login = () => {
    
    return <StyledLogin>
        <Header/>
        <main>
            <Hero/>
            <form>
                <InputField placehoder="Digite seu email" label="Email" type="text"/>
                <InputField placehoder="Digite sua senha" label="Password" type="password"/>
                <Link to={'/dashboard'}>
                    <Button text="Entrar">{}</Button>
                </Link>
                <Link to={'/register'}>
                    <Button text="Cadastrar">{}</Button>
                </Link>

            </form>
        </main>
        <Footer/>
    </StyledLogin>
}