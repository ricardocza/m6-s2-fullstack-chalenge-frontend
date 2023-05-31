import { Link } from "react-router-dom"
import { StyledUpdateModal } from "./style"
import React from "react"
import { InputField } from "../InputField"
import { Button } from "../Button"

interface iProps {
    setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const UpdateModal = ({setUpdateModal}: iProps) => {
    const handleUpdate = () => {
        console.log("sends update request")
    }
    return <StyledUpdateModal>
        <form>
            <InputField label="Nome" type="text" placehoder="Digite o seu primeiro nome"></InputField>
            <InputField label="Sobrenome" type="text" placehoder="Digite o seu sobrenome"></InputField>
            <InputField label="Email" type="text" placehoder="Digite o seu email"></InputField>
            <InputField label="Senha" type="password" placehoder="Digite o sua senha"></InputField>
            <InputField label="Senha" type="password" placehoder="Confirme a sua senha"></InputField>
            <div>
                <Button onClick={() => setUpdateModal(false)} text="Cancelar"></Button>
                <Button onClick={() => handleUpdate()} text="Atualizar"></Button>
            </div>
        </form>
    </StyledUpdateModal>
}