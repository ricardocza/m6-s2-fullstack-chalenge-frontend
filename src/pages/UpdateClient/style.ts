import styled from "styled-components";

export const StyledUpdate = styled.div`
    position: relative;
    & > main > section {
        margin-top: 44px;
        padding: 0 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 32px;
        & > p {
            color: var(--color-grey100);
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


    
`