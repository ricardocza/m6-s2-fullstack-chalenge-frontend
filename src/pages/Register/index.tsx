import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { InputField } from "../../components/InputField";
import { StyledRegister } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import axios from "axios";

export const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "Este campo deve conter no mínimo 2 caracteres"),
    lastName: z
      .string()
      .min(2, "Este campo deve conter no mínimo 2 caracteres"),
    email: z.string().email("Formato de e-mail inválido"),
    password: z
      .string()
      .min(6, "Este campo deve conter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "Este campo deve conter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type iRegisterForm = z.infer<typeof registerFormSchema>;

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const submitRegister: SubmitHandler<iRegisterForm> = async (data) => {
    const { confirmPassword, ...registerData } = data;
    const toaster = toast.loading("Cadastrando, aguarde!");
    try {
      const response = await api.post("/user", registerData);
      toast.update(toaster, {
        render: "Cadastro realizado com sucesso!",
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
      navigate("/");
    } catch (error: any) {
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
  };

  return (
    <StyledRegister>
      <Header />
      <main>
        <Hero />
        <form onSubmit={handleSubmit(submitRegister)}>
          <InputField
            className={errors.firstName && "formError"}
            placehoder="Digite seu nome"
            label="Nome"
            type="text"
            register={register("firstName")}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
          <InputField
            className={errors.lastName && "formError"}
            placehoder="Digite seu sobrenome"
            label="Sobrenome"
            type="text"
            register={register("lastName")}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
          <InputField
            className={errors.email && "formError"}
            placehoder="Digite seu email"
            label="Email"
            type="text"
            register={register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <InputField
            className={errors.password && "formError"}
            placehoder="Digite sua senha"
            label="Senha"
            type="password"
            register={register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <InputField
            className={errors.confirmPassword && "formError"}
            placehoder="Confirme sua senha"
            label="Confirmação de senha"
            type="password"
            register={register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <Button type="submit" text="Cadastrar"></Button>
          <Link to={"/"}>
            <Button text="Voltar ao Login"></Button>
          </Link>
        </form>
      </main>
      <Footer />
    </StyledRegister>
  );
};
