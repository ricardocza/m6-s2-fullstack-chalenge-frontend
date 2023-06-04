import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: var(--color-grey500);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    border-radius: 20px 20px 0 0;

    & > div {
        width: 100%;        
        border-radius: 10px;
        display: flex;
        justify-content: space-evenly;        
        align-items: center;
        & > a {
            width: 32px;
            height: 32px;
            & > svg {
                width: 100%;
                height: 100%;
                fill: var(--color-primary);
                cursor: pointer;
            }
        }
    }

`