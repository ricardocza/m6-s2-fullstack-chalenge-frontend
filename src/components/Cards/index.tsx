import { StyledCard } from "./style";
import {FaEdit} from "react-icons/fa"
import {FaTrashAlt} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

interface iCard {
  name: string;
  phone: string;
  email: string;
  id: string;
  onClick?: () => void;

}
export const Card = ({ name, phone, email, id, onClick }: iCard) => {
  const navigate = useNavigate()
  return (
    <StyledCard id={id} onClick={onClick}>
      <div>
        <h2>{name}</h2>
        <h3>Telefone: {`(${phone.substring(0, 2)}) ${phone.substring(2)}`}</h3>
        <h3>Email: {email}</h3>
      </div>
      
    </StyledCard>
  );
};
