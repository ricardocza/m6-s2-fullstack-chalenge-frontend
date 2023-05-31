import { StyledFooter } from "./style"
import {FaGithubAlt} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import { Link } from "react-router-dom"
export const Footer = () => {

    return <StyledFooter>
        <div>
            <Link to={'https://github.com/ricardocza'} target="blank">
                <FaGithubAlt/>            
            </Link>
            <Link to={'https://www.linkedin.com/in/ricardo-cza/'} target="blank">
                <FaLinkedinIn/>
            </Link>
        </div>
    </StyledFooter>
}