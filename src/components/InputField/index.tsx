import { UseFormRegisterReturn } from "react-hook-form"
import { StyledInput } from "./style"

interface InputProps {
    label: string,
    type: "text" | "password",
    placehoder: string,
    register?: UseFormRegisterReturn
    className?: string
    value?: string
}

export const InputField = ({label, type, placehoder, register, className, value}: InputProps) => {

    return <StyledInput >
        <label htmlFor="">{label}</label>
        <input 
            className={className} 
            type={type} 
            placeholder={placehoder}
            value={value} 
            {...register}/>
    </StyledInput>
}