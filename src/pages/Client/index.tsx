import { Link, useNavigate, useParams } from "react-router-dom";
import { StyledClient } from "./style";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Card } from "../../components/Cards";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { InputField } from "../../components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { createContactSchema } from "../../schemas/contactSchemas";
import { RequestsContext } from "../../Context/RequestsContext";
import { iCreateClient } from "../../schemas/clientSchemas";

interface iClient {
  name: string;
  email: string;
  phone: string;
  id: string;
  contact: iContact[];
}

interface iContact {
  name: string;
  email: string;
  phone: string;
  id: string;
}

interface RouteParams {
  id: string;
}

export const Client = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false as boolean)
  const [client, setClient] = useState({} as iClient | null);
  const [updater, setUpdater] = useState(false);
  const navigate = useNavigate();
  const {deleteClient, createContact} = useContext(RequestsContext)

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const getClients = async () => {
      try {
        const responseClient = await api.get(`/clients/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setClient(responseClient.data);
      } catch (error: any) {
        toast.error("Ocorreu um erro, faça o login novamente", {
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
        localStorage.clear();
        navigate("/");
      }
    };

    getClients();
  }, [updater, modal]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContact>({
    resolver: zodResolver(createContactSchema),
  });
  
  const submitContact: SubmitHandler<iCreateClient> = async (data) => {
      const response = await createContact(data, client?.id!)
      if (response) {
        const toaster = toast.success("Contato cadastrado!");
        setModal(false);

      }
      
  };

  const deleteContact = async (id: string): Promise<void> => {}


  return (
    <>
      {client?.phone ? (
        <StyledClient>
          <Header />
          <main>
            <h2>Cliente: {client.name}</h2>
            <h2>ID: {id}</h2>
            <h2>Email: {client.email}</h2>
            <h2>
              Telefone:{" "}
              {`(${client.phone.substring(0, 2)}) ${client.phone.substring(2)}`}
            </h2>

            <div>
              <div className="contacts">
                <h2>Contatos</h2>
                <FaPlusCircle onClick={() => setModal(true)} />
              </div>
              {client.contact.length === 0 ? (
                <h2>Não há contatos cadastrados para esse cliente</h2>
              ) : (
                client.contact.map((element: iContact) => (
                  <>
                    <Card
                      key={element.id}
                      id={element.id}
                      name={element.name}
                      email={element.email}
                      phone={element.phone} 
                      onClick={() => navigate(`/contact/update/${element.id}`)}
                    />                      
                  </>
                ))
              )}
            </div>
            <div className="buttons">
              <Link to={`/client/update/${id}`}>Atualizar Cliente</Link>
              <Button
                onClick={() => deleteClient(id!)}
                text="Excluir Cliente"
                type="button"
              />
              <Link to={"/clients"}>Voltar</Link>
            </div>
          </main>
          {modal === true ? (
        <form onSubmit={handleSubmit(submitContact)}>
          <InputField
            className={errors.name && "formError"}
            placehoder="Digite nome do contato"
            label="Nome"
            type="text"
            register={register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <InputField
            className={errors.email && "formError"}
            placehoder="Digite o email do contato"
            label="Email"
            type="text"
            register={register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <InputField
            className={errors.email && "formError"}
            placehoder="Digite o telefone do contato"
            label="Telefone"
            type="text"
            register={register("phone")}
          />
          {errors.phone && <span>{errors.phone.message}</span>}

          <Button type="submit" text="Criar contato" />
          <Button
            type="button"
            text="Cancelar"
            onClick={() => setModal(false)}
          />
        </form>
      ) : (
        <></>
      )}
        </StyledClient>
      ) : (
        <></>
      )}
      <Footer/>
      
    </>
  );
};
