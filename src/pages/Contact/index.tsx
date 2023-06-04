import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { InputField } from "../../components/InputField";
import { StyledContact } from "./style";
import { Options } from "../../components/Options";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Card } from "../../components/Cards";

interface iContact {
  name: string;
  email: string;
  phone: string;
  id: string;
}

export const Contact = () => {
  const [contacts, setContacts] = useState([] as iContact[]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const getUsers = async () => {
      try {
        const response = await api.get("/contacts", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setContacts(response.data);
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

    getUsers();
  }, []);

  const deleteContact = async (id: string): Promise<void> => {}

  return (
    <StyledContact>
      <Header />
      <main>
        <Hero />
        <section>
          <h2>Contatos</h2>
          <ul>
            {contacts.length === 0 ? (
              <h2>Não há clientes cadastrados para esse usuário</h2>
            ) : (
              contacts.map((element: iContact) => (
                <Card
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  email={element.email}
                  phone={element.phone}
                  
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
    </StyledContact>
  );
};
