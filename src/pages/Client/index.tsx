import { Link, useNavigate, useParams } from "react-router-dom";
import { StyledClient } from "./style";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Card } from "../../components/Cards";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from "../../components/Button";

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
  const [client, setClient] = useState({} as iClient | null);
  const [updater, setUpdater] = useState(false);
  const navigate = useNavigate();

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
  }, [updater]);

  const deleteClient = async (id: string) => {
    const toaster = toast.loading("Removendo cliente...");
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.delete(`/clients/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.update(toaster, {
        render: "Cadastro removido com sucesso!",
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
      navigate("/clients");
    } catch (error: any) {
      console.log(error.response.data.message);
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
  };

  const deleteContact = async (id: string) => {
    const token = localStorage.getItem("@TOKEN");
    const toaster = toast.loading("Removendo contato...");

    try {
      const response = await api.delete(`/contacts/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
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
      setUpdater(!updater);
    } catch (error: any) {
      console.log(error.response.data.message);
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
  };

  return (
    <>
      {client?.phone ? (
        <StyledClient>
          <h2>ID: {id}</h2>
          <h2>Cliente: {client.name}</h2>
          <h2>Email: {client.email}</h2>
          <h2>
            Telefone:{" "}
            {`(${client.phone.substring(0, 2)}) ${client.phone.substring(2)}`}
          </h2>

          <div>
            <div className="contacts">
              <h2>Clientes</h2>
              <FaPlusCircle />
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
                  >
                    <button onClick={() => deleteContact(element.id)}>
                      Excluir Contato
                    </button>
                  </Card>
                </>
              ))
            )}
          </div>
          <div className="buttons">
            <Button
              onClick={() => deleteClient(id!)}
              text="Excluir Cliente"
              type="button"
            />
            <Link to={"/clients"}>Voltar</Link>
          </div>
        </StyledClient>
      ) : (
        <></>
      )}
    </>
  );
};
