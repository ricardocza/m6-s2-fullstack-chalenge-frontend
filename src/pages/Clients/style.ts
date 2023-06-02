import styled from 'styled-components'

export const StyledClients = styled.div`
position: relative;
    & > main > section {
        margin-top: 44px;
        padding: 0 1.5rem;
        & > div {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        & > div > a {
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40px;
            border-radius: var(--b-radius8);
            border: none;
            background-color: var(--bg-main);
            color: var(--color-primary);
            font-size: 20px;
            cursor: pointer;
            box-shadow: var(--box-shadow);
    
            &:active {
                transform: scale(0.98);
                transition: 0.5s;
            }
        }

    }
    svg {
        cursor: pointer;
    }

    & > form {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -10px;
        left: 0;
        padding: 40px;
        background-color: #000000;
        display: flex;
        flex-direction: column;
    }
    
`

