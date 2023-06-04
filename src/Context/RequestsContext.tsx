import { createContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { createClientSchema } from "../schemas/clientSchemas";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface iRequestsContext {
    createClient:(data: iSubmitClient) => Promise<boolean>
    updateClient: (object: any, id: string) => Promise<boolean | string>;
    deleteClient: (id: string) => Promise<void>
    createContact:(data: iSubmitClient, clientId: string) => Promise<boolean | string>
    updateContact: (object: any, id: string) => Promise<boolean | string>;
    deleteContact: (id: string) => Promise<void>

}

interface iRequestProps {
    children: React.ReactNode
}
type iSubmitClient = z.infer<typeof createClientSchema>;

export const RequestsContext = createContext({} as iRequestsContext)

export const RequestsProvider = ({children}: iRequestProps) => {
    const navigate = useNavigate()

    const createClient = async (data: iSubmitClient): Promise<boolean> => {
        const token = localStorage.getItem("@TOKEN");

        try {
          const response = await api.post("/clients", data, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          return true
        } catch (error: any) {
          console.log(error.response.data.message);
          const toaster = toast.error(error.response.data.message);
          return false

        }
      };

      const updateClient = async (data: any, clientId: string) => {
        const token = localStorage.getItem("@TOKEN");
        try {
          const response = await api.patch(`/clients/${clientId}`, data, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          return true;
        } catch (error: any) {
          console.log(Object.values(error.response.data.message)[0]);
          return String(Object.values(error.response.data.message)[0]);
        }
      };
      
      const deleteClient = async (id: string): Promise<void> => {
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
          const toaster = toast.error(error.response.data.message);
          console.log(error.response.data.message);
          
        }
      };
      
      const createContact = async (data: iSubmitClient, clientId: string): Promise<boolean | string> => {
          const token = localStorage.getItem("@TOKEN");  
          try {
            const response = await api.post(`/contacts/${clientId}`, data, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
            return true
          } catch (error: any) {
            console.log(error.response.data.message);
          const toaster = toast.error(error.response.data.message);
          return false
  
          }
        };
        
        const updateContact = async (data: any, contactId: string) => {
          const token = localStorage.getItem("@TOKEN");
          try {
            const response = await api.patch(`/contacts/${contactId}`, data, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
            return true;
          } catch (error: any) {
            console.log(Object.values(error.response.data.message)[0]);
            return String(Object.values(error.response.data.message)[0]);
          }
        };

        const deleteContact = async (id: string): Promise<void> => {
          const toaster = toast.loading("Removendo cliente...");
          const token = localStorage.getItem("@TOKEN");
          try {
            const response = await api.delete(`/contacts/${id}/`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
            toast.update(toaster, {
              render: "Contato removido com sucesso!",
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
            navigate(-1);
          } catch (error: any) {
            const toaster = toast.error(error.response.data.message);
            console.log(error.response.data.message);
            
          }
          
        };

    return (
        <RequestsContext.Provider value={{
            createClient,
            updateClient,
            deleteClient,
            createContact,
            updateContact,
            deleteContact
        }}>
            {children}
        </RequestsContext.Provider>
    )
}