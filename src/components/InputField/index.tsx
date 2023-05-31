import { StyledInput } from "./style"

interface InputProps {
    label: string,
    type: string,
    placehoder: string
}

export const InputField = ({label, type, placehoder}: InputProps) => {

    return <StyledInput>
        <label htmlFor="">{label}</label>
        <input type={type} placeholder={placehoder}/>
    </StyledInput>
}