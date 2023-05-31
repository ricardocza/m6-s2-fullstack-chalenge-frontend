import styled from "styled-components";

export const StyledInput = styled.div`    

    display: flex;
    flex-direction: column;
    gap: 16px;

    & > label {
        color: var(--color-grey100);
        font-size: 20px;
        font-weight: 400;
    }

    & > input {
        border-radius: 12px;
        box-shadow: var(--box-shadow);
        height: 40px;
        border: 1px solid var(--color-grey200);
        background-color: var(--color-grey200);
        padding: 0 1rem;
        font-size: 16px;
    }

`