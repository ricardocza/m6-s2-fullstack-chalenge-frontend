import { StyledUpdateField } from "./style";
import { ChangeEvent, useContext, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import { TiCancelOutline } from "react-icons/ti";
import { UserContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { iUser } from "../../schemas/userSchemas";

interface InputProps {
  label: string;
  type: "text" | "password";
  placehoder: string;
  value?: string;
  userData?: iUser;
  field: "firstName" | "lastName" | "email" | "password" | "phone" | "name";
  patchFunction: (data: any, id: string) => Promise<boolean | string>
  id?: string
}

export const UpdateField = ({
  label,
  type,
  placehoder,
  value,
  userData,
  field,
  patchFunction,
  id
}: InputProps) => {
  const [edit, setEdit] = useState(false as boolean);
  const [inputValue, setInputValue] = useState(value as string);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const handleSave = async () => {
    
    if (inputValue === "" || inputValue === undefined) {
      setEdit(false);
    } else {
      const toaster = toast.loading("Atualizando, aguarde!");
      const response =
        field === "firstName"
        ? await patchFunction({ firstName: inputValue }, id!)
        : field === "name"
        ? await patchFunction({ name: inputValue }, id!)
        : field === "lastName"
        ? await patchFunction({ lastName: inputValue }, id!)
        : field === "email"
        ? await patchFunction({ email: inputValue }, id!)
        : field === "phone"
        ? await patchFunction({ phone: inputValue }, id!)
        : await patchFunction({ password: inputValue }, id!);
      if (response === true) {
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
          render: response,
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
    }
  };
  
  return (
    <StyledUpdateField>
      {
        value ? <>
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
      </>

          :
          null
      }

    </StyledUpdateField>
  );
};
