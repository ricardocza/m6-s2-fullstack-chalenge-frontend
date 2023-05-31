import { StyledHeader } from "./style"
import logo from '../../images/m6-s2-logo.png'
import {FaUserAlt} from 'react-icons/fa'
import { UserContext } from "../../Context/UserContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const Header = () => {
    const {userLoggedIn} = useContext(UserContext)
    
    return <StyledHeader>
        <div>
            <img src={logo} alt="" />
        </div>
        <h1>Desafio Full Stack</h1>
        {
            userLoggedIn
            ?
            <Link to={'/dashboard/user'}>
                <FaUserAlt/>
            </Link>
            :
            <></>
        }
    </StyledHeader>
}