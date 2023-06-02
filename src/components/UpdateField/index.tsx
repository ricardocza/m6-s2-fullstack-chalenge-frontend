import { StyledUpdateField } from "./style";
import { ChangeEvent, useContext, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiCancelOutline } from "react-icons/ti";
import { iUser } from "../../pages/Update";
import { UserContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface InputProps {
  label: string;
  type: "text" | "password";
  placehoder: string;
  value?: string;
  userData?: iUser;
  field: "firstName" | "lastName" | "email" | "password";
}

export const UpdateField = ({
  label,
  type,
  placehoder,
  value,
  userData,
  field,
}: InputProps) => {
  const [edit, setEdit] = useState(false as boolean);
  const [inputValue, setInputValue] = useState(value as string | undefined);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleSave = async () => {
    if (inputValue === "" || value === inputValue) {
      setEdit(false);
    } else {
      const toaster = toast.loading("Atualizando, aguarde!");
      const response =
        field === "firstName"
          ? await updateUser({ firstName: inputValue })
          : field === "lastName"
          ? await updateUser({ lastName: inputValue })
          : field === "email"
          ? await updateUser({ email: inputValue })
          : await updateUser({ password: inputValue });
      if (response) {
        toast.update(toaster, {
          render: "Cadastro atualizado com sucesso!",
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
        setEdit(false);
      } else {
        toast.update(toaster, {
          render: "Algo deu errado, realize novamente o login",
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
    }
  };

  return (
    <StyledUpdateField>
      <label htmlFor="">{label}</label>
      <div>
        <input
          onChange={handleInput}
          className={edit ? "" : "disabled"}
          type={type}
          placeholder={placehoder}
          defaultValue={value}
          readOnly={edit ? false : true}
        />
        {edit ? (
          <>
            <TiCancelOutline onClick={() => setEdit(false)} />
            <TiTickOutline onClick={handleSave} />
          </>
        ) : (
          <TiEdit onClick={() => setEdit(true)} />
        )}
      </div>
    </StyledUpdateField>
  );
};
