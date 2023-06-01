import { UseFormRegisterReturn } from "react-hook-form"
import { StyledInput } from "./style"

interface InputProps {
    label: string,
    type: string,
    placehoder: string,
    register: UseFormRegisterReturn
    className?: string
}

export const InputField = ({label, type, placehoder, register, className}: InputProps) => {

    return <StyledInput >
        <label htmlFor="">{label}</label>
        <input className={className} type={type} placeholder={placehoder} {...register}/>
    </StyledInput>
}