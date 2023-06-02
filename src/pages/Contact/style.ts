import styled from 'styled-components'

export const StyledContact = styled.div`
position: relative;
    & > main > section {
        margin-top: 44px;
        padding: 0 1.5rem;

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
    
    
`

