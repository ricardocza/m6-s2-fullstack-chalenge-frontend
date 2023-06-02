import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { StyledUser } from "./style";
import { useState } from "react";
import { InputField } from "../../components/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const updateFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "Este campo deve conter no mínimo 2 caracteres")
      .nullish(),
    lastName: z
      .string()
      .min(2, "Este campo deve conter no mínimo 2 caracteres")
      .nullish(),
    email: z.string().email("Formato de e-mail inválido").nullish(),
    password: z
      .string()
      .min(6, "Este campo deve conter no mínimo 6 caracteres")
      .nullish(),
    confirmPassword: z
      .string()
      .min(6, "Este campo deve conter no mínimo 6 caracteres")
      .nullish(),
  })
  .partial()
  .refine(
    (data) => {
      if (data.password) return data.password === data.confirmPassword;
    },
    {
      message: "As senhas não coincidem",
    }
  );

type iUpdateForm = z.infer<typeof updateFormSchema>;

export const User = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateForm>({
    resolver: zodResolver(updateFormSchema),
  });

  const [updateModal, setUpdateModal] = useState(false as boolean);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleModal = () => {
    setUpdateModal(true);
  };

  const submitUpdate: SubmitHandler<iUpdateForm> = (data) => {
    console.log(data);
  };

  return (
    <StyledUser>
      <Header />
      <main>
        <Hero />
        <section>
          <h2>Olá, Fulano</h2>
          <p>Você possui atualmente 69 clientes</p>
          <p>Seus clientes possuem 420 contatos</p>
          <Link to={"/dashboard"}>Voltar para a dashboard?</Link>
        </section>
      </main>
      <div>
        <Link to={"/dashboard/user/update"}>Atualizar</Link>
        <Button onClick={handleLogout} text="Logout"></Button>
      </div>
      {/* {updateModal ? (
        <UpdateModal onSubmit={handleSubmit(submitUpdate)}>
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

          <div>
            <Button
              onClick={() => setUpdateModal(false)}
              text="Cancelar"
            ></Button>
            <Button type="submit" text="Atualizar"></Button>
          </div>
        </UpdateModal>
      ) : null} */}

      <Footer />
    </StyledUser>
  );
};
