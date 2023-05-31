import { StyledHero } from "./style"
import heroImg from '../../images/hero.jpg'

export const Hero = () => {

    return <StyledHero>        
        <img src={heroImg} alt="" />
        <h2>Venha fazer parte desse projeto incrível!</h2>
    </StyledHero>
}