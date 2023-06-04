import { typeOptions } from "@testing-library/user-event/dist/type/typeImplementation"
import { StyledButton } from "./style"
import React, {Children} from 'react'

interface ButtonProps {
    text: string   
    onClick?: () => void   
    children?: React.ReactNode
    type?: "button" | "submit"
}
export const Button = ({text, onClick, children, type}: ButtonProps) => {
   
    return <StyledButton>
        <button type={type} onClick={onClick} className={Children.count(children) > 0 ? "fragment": ""}>{text}</button>
        {children}
    </StyledButton>
}

// className={Children.count(children) > 0 ? ".fragment": ""}