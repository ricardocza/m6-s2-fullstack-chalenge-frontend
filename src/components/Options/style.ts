import styled from "styled-components";

export const StyledOptions = styled.div`
    & > ul {
        background-color: var(--color-grey300);
        border-radius: 0 0 20px 20px;
        color: var(--color-grey100);
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 1rem;
        transition: 0.5s;

        & > li {
            display: flex;
            align-items: center;
            padding: 0.5rem 0;
            cursor: pointer;            
        }
    }
    
`