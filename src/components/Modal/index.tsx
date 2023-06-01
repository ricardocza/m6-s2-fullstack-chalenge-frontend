import { StyledUpdateModal } from "./style"
import React from "react"

interface iProps {
    children: React.ReactNode
    onSubmit: () => void
}

export const UpdateModal = ({onSubmit, children}: iProps) => {
    
    return <StyledUpdateModal>
        <form onSubmit={onSubmit} noValidate={true}>
           {children}
        </form>
    </StyledUpdateModal>
}