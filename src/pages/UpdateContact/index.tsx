import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { StyledUpdate } from "./style";
import { useContext, useEffect, useState } from "react";
import { UpdateField } from "../../components/UpdateField";
import { api } from "../../services/api";
import { iUpdateForm } from "../../schemas/userSchemas";
import { RequestsContext } from "../../Context/RequestsContext";

export const UpdateContact = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({} as iUpdateForm);
  const {deleteContact, updateContact} = useContext(RequestsContext)

 const {id} = useParams()

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getUserData = async () => {
      const response = await api.get(`/contacts/${id}`, {
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
          <h2>Informações do contato "{data.name}"</h2>
          <UpdateField
            field="name"
            value={data.name!}
            type="text"
            label="Nome"
            placehoder="Insira seu nome"
            patchFunction={updateContact}
            id={id!}
          />

          <UpdateField
            field="email"
            value={data.email!}
            type="text"
            label="Email"
            placehoder="Insira seu email"
            patchFunction={updateContact}
            id={id!}
          />

          <UpdateField
            field="phone"
            value={data.phone!}
            type="text"
            label="Telefone"
            placehoder="Insira seu telefone"
            patchFunction={updateContact}
            id={id!}
          />

          <div>
          <Button
                onClick={() => deleteContact(id!)}
                text="Excluir Contato"
                type="button"
              />
          <Button
                onClick={() => navigate(-1)}
                text="Voltar"
                type="button"
              />
              
          </div>
        </section>
      </main>

      <Footer />
    </StyledUpdate>
  );
};
