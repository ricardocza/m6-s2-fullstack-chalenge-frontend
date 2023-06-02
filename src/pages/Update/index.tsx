import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { StyledUpdate } from "./style";
import { useContext, useEffect, useState } from "react";
import { InputField } from "../../components/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UpdateField } from "../../components/UpdateField";
import { api } from "../../services/api";
import { UserContext } from "../../Context/UserContext";

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

export interface iUser {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export const Update = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({} as iUser);

  const submitUpdate: SubmitHandler<iUpdateForm> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getUserData = async () => {
      const response = await api.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    };

    getUserData();
  }, []);

  return (
    <StyledUpdate>
      <Header />
      <main>
        <Hero />
        <section>
          <h2>Olá, Fulano</h2>
          <UpdateField
            field="firstName"
            value={userData.firstName}
            type="text"
            label="Nome"
            placehoder="Insira seu nome"
          />
          <UpdateField
            field="lastName"
            value={userData.lastName}
            type="text"
            label="Sobrenome"
            placehoder="Insira seu sobrenome"
          />
          <UpdateField
            field="email"
            value={userData.email}
            type="text"
            label="Email"
            placehoder="Insira seu email"
          />
          <UpdateField
            field="password"
            type="password"
            label="Senha"
            placehoder="Insira sua senha"
          />
          <div>
            <Link to={"/dashboard/user"}>Voltar</Link>
          </div>
        </section>
      </main>

      <Footer />
    </StyledUpdate>
  );
};
