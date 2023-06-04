import styled from 'styled-components'

export const StyledClient = styled.div`
    position: relative;
    & > form {
        position: absolute;
        width: 100%;
        height: 103%;
        top: -10px;
        left: 0;
        padding: 40px;
        background-color: #000000;
        display: flex;
        flex-direction: column;
    }

    & > main {
        padding: 20px 10px 60px;
        
        & > h2 + div {
            margin-top: 30px;
        }
        & > .buttons {
            display: flex;
            flex-direction: column;
            
            & > a {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
                width: 100%;
                height: 40px;
                border-radius: var(--b-radius8);
                border: none;
                background-color: var(--bg-main);
                color: var(--color-primary);
                font-size: 20px;
                cursor: pointer;
                box-shadow: var(--box-shadow);
            }
        }
        
    }
    
    .contacts {
        display: flex;
        align-items: center;
        gap: 20px;
    }
`

