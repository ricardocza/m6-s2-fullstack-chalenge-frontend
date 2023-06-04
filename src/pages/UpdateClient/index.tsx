import { Link, useNavigate, useParams } from "react-router-dom";
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
import { iUpdateClient } from "../../schemas/clientSchemas";
import { iUpdateForm, iUser } from "../../schemas/userSchemas";
import userEvent from "@testing-library/user-event";
import { iCreateClient } from "../../schemas/clientSchemas";
import { RequestsContext } from "../../Context/RequestsContext";

export const UpdateClient = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const {updateClient} = useContext(RequestsContext)
  const [data, setData] = useState({} as iUpdateForm);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getUserData = async () => {
      const response = await api.get(`clients/${id}`, {
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
          <h2>Dados do Cliente "{data.name}"</h2>
          <UpdateField
            field="name"
            value={data.name!}
            type="text"
            label="Nome"
            placehoder="Insira seu nome"
            patchFunction={updateClient}
            id={id}
          />

          <UpdateField
            field="email"
            value={data.email!}
            type="text"
            label="Email"
            placehoder="Insira seu email"
            patchFunction={updateClient}
            id={id}
          />

          <UpdateField
            field="phone"
            value={data.phone!}
            type="text"
            label="Telefone"
            placehoder="Insira seu telefone"
            patchFunction={updateClient}
            id={id}
          />

          <div>
            <Button text="voltar" type="button" onClick={() => navigate(-1)}/>
          </div>
        </section>
      </main>

      <Footer />
    </StyledUpdate>
  );
};
