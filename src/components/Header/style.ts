import styled from "styled-components";

export const StyledHeader =styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    margin: 10px 0;
    
    & > div {
        width: 75px;
        height: 75px;

        & > img {
            width: 100%;
        }
    }

    & > a {
        border: none;
        width: 50px;
        height: 50px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;

        & > svg {
            fill: var(--bg-main);
        }
    }

`