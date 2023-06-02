import { StyledCard } from "./style";
interface iCard {
  name: string;
  phone: string;
  email: string;
  id: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
export const Card = ({ name, phone, email, id, onClick, children }: iCard) => {
  return (
    <StyledCard id={id} onClick={onClick}>
      <div>
        <h2>{name}</h2>
        <h3>Telefone: {`(${phone.substring(0, 2)}) ${phone.substring(2)}`}</h3>
        <h3>Email: {email}</h3>
      </div>
      {children}
    </StyledCard>
  );
};
