import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { InputField } from "../../components/InputField"
import { StyledLogin } from "./style"
import { SubmitHandler, useForm } from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { toast } from "react-toastify";
import axios from "axios"
import { api } from "../../services/api"
import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"


const loginUserSchema = z.object({
    email: z.string()
        .nonempty("Campo obrigatório")
        .email("Formato de e-mail inválido"),
    password: z.string()
        .min(6, "A senha deve possuir no mínimo 6 caracteres")        
})

type iLoginForm = z.infer<typeof loginUserSchema>

export const Login = () => {

    const navigate = useNavigate()
    const {setToken} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<iLoginForm>({
        mode: "onSubmit",
        resolver: zodResolver(loginUserSchema)
    })
    const submitLogin: SubmitHandler<iLoginForm> = async (data) => {
        
        const toaster = toast.loading("Cadastrando, aguarde!")
        try {
            const response = await api.post("/login", data)
            toast.update(toaster, {
                render: "Login realizado!",
                type: "success",
                isLoading: false,
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });

              
            localStorage.setItem("@TOKEN", response.data.token)
            setToken(response.data.token)
            navigate('/dashboard')
        } catch (error:any) {
            
            if (axios.isAxiosError(error) && error.response) {
                toast.update(toaster, {
                  render: error.response.data.message,
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
              }
        }
    }

    return <StyledLogin>
        <Header/>
        <main>
            <Hero/>
            <form onSubmit={handleSubmit(submitLogin)} noValidate={true}>
                <InputField
                    register={register("email")}
                    placehoder="Digite seu email" 
                    label="Email"
                    type="text"
                />
                {errors.email && <span>{errors.email.message}</span>}
                <InputField
                    register={register("password")} 
                    placehoder="Digite sua senha" 
                    label="Password"
                    type="password"
                    />                
                {errors.password && <span>{errors.password.message}</span>}
                <Button type="submit" text="Entrar">{}</Button>                
                <Link to={'/register'}>
                    <Button text="Cadastrar">{}</Button>
                </Link>

            </form>
        </main>
        <Footer/>
    </StyledLogin>
}