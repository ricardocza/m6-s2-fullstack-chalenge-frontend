import { StyledButton } from "./style"
import React, {Children} from 'react'

interface ButtonProps {
    text: string   
    onClick?: () => void   
    children?: React.ReactNode
}
export const Button = ({text, onClick,children}: ButtonProps) => {
   
    return <StyledButton>
        <button onClick={onClick} className={Children.count(children) > 0 ? "fragment": ""} type="button">{text}</button>
        {children}
    </StyledButton>
}

// className={Children.count(children) > 0 ? ".fragment": ""}