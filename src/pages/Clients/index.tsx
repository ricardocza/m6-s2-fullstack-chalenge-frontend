import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { StyledClients } from "./style";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Card } from "../../components/Cards";
import { FaPlusCircle } from "react-icons/fa";
import { Modal } from "../../components/Modal";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserContext } from "../../Context/UserContext";
import { createClientSchema, iClient, iCreateClient } from "../../schemas/clientSchemas";
import { RequestsContext } from "../../Context/RequestsContext";



export const Clients = () => {
  const token = localStorage.getItem("@TOKEN");
  const [clients, setClients] = useState([] as iClient[]);
  const [modal, setModal] = useState(false);
  const {createClient, deleteClient} = useContext(RequestsContext)
  const navigate = useNavigate();


  useEffect(() => {
    const getClients = async () => {
      try {
        const response = await api.get("/clients", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setClients(response.data);
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
  }, [modal]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreateClient>({
    resolver: zodResolver(createClientSchema),
  });

  const submitClient: SubmitHandler<iCreateClient> = async (data) => {
      const response = await createClient(data)
      if(response) {
        const toaster = toast.success("Cliente cadastrado!");
        setModal(false);
      }
          
  };

  const navigateToClient = (id: string) => {
    navigate(`./${id}`);
  };

  return (
    <StyledClients>
      <Header />
      <main>
        <Hero />
        <section>
          <div>
            <h2>Clientes</h2>
            <FaPlusCircle onClick={() => setModal(true)} />
          </div>

          <ul>
            {clients.length === 0 ? (
              <h2>Não há clientes cadastrados para esse usuário</h2>
            ) : (
              clients.map((element: iClient) => (
                <Card
                  onClick={() => navigateToClient(element.id)}
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  phone={element.phone}
                  email={element.email}
                 
                />
              ))
            )}
          </ul>
          <div>
            <Link to={"/dashboard"}>Voltar</Link>
          </div>
        </section>
      </main>
      <Footer />
      {modal === true ? (
        <form onSubmit={handleSubmit(submitClient)}>
          <InputField
            className={errors.name && "formError"}
            placehoder="Digite nome do cliente"
            label="Nome"
            type="text"
            register={register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <InputField
            className={errors.email && "formError"}
            placehoder="Digite o email do cliente"
            label="Email"
            type="text"
            register={register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <InputField
            className={errors.email && "formError"}
            placehoder="Digite o telefone do cliente"
            label="Telefone"
            type="text"
            register={register("phone")}
          />
          {errors.phone && <span>{errors.phone.message}</span>}

          <Button type="submit" text="Criar Cliente" />
          <Button
            type="button"
            text="Cancelar"
            onClick={() => setModal(false)}
          />
        </form>
      ) : (
        <></>
      )}
    </StyledClients>
  );
};
