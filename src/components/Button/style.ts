import styled from "styled-components";

export const StyledButton = styled.div`
    margin-top: 20px;
    transition: 0.5s;
    & > button, a {
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
    .fragment {
        border-radius: 8px 8px 0 0;        
    }
`
