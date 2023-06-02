import styled from 'styled-components'

export const StyledClient = styled.div`
    padding: 20px;

    & > h2 + div {
        margin-top: 30px;
    }
    & > .buttons {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        & > a {
            display: flex;
            align-items: center;
            justify-content: center;
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
    .contacts {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
`

