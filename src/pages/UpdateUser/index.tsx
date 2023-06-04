import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { StyledUpdate } from "./style";
import { useContext, useEffect, useState } from "react";
import { UpdateField } from "../../components/UpdateField";
import { api } from "../../services/api";
import { UserContext } from "../../Context/UserContext";
import { iUpdateForm } from "../../schemas/userSchemas";

export const UpdateUser = () => {
  const {updateUser} = useContext(UserContext)
  const [data, setData] = useState({} as iUpdateForm);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getUserData = async () => {
      const response = await api.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
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
            value={data.firstName!}
            type="text"
            label="Nome"
            placehoder="Insira seu nome"
            patchFunction={updateUser}
          />

          <UpdateField
            field="lastName"
            value={data.lastName!}
            type="text"
            label="Sobrenome"
            placehoder="Insira seu sobrenome"
            patchFunction={updateUser}
          />

          <UpdateField
            field="password"
            value="password"
            type="password"
            label="Senha"
            placehoder="Atualize sua senha"
            patchFunction={updateUser}
          />

          <UpdateField
            field="email"
            value={data.email!}
            type="text"
            label="Email"
            placehoder="Insira seu email"
            patchFunction={updateUser}
          />

          <div>
            <Link to={"/dashboard"}>Voltar</Link>
          </div>
        </section>
      </main>

      <Footer />
    </StyledUpdate>
  );
};
