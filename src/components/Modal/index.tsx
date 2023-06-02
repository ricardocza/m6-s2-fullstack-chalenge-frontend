import { StyledModal } from "./style";
import React from "react";

interface iProps {
  children: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: () => void;
}

export const Modal = ({ children, setModal, onSubmit }: iProps) => {
  return (
    <StyledModal onSubmit={onSubmit}>
      <h2 onClick={() => setModal(false)}>x</h2>
      <form noValidate={true}>{children}</form>
    </StyledModal>
  );
};
