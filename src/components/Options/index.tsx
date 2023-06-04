import { StyledOptions } from "./style"
import {motion} from 'framer-motion'

export const Options = () => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    return <StyledOptions>
        <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible">
            <motion.li className="item" variants={item}>CADASTRAR NOVO</motion.li>
            <motion.li className="item" variants={item}>ATUALIZAR</motion.li>
            <motion.li className="item" variants={item}>GERAR RELATÓRIO</motion.li>
            <motion.li className="item" variants={item}>REMOVER</motion.li>
        </motion.ul>
    </StyledOptions>
}