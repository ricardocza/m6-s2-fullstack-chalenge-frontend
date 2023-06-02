import styled from "styled-components";

export const StyledUpdateField = styled.div`    

    display: flex;
    flex-direction: column;

    & > label {
        color: var(--color-grey100);
        font-size: 20px;
        font-weight: 400;
    }
    
    & > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;

        & > input {
            border-radius: 12px;
            box-shadow: var(--box-shadow);
            height: 40px;        
            background-color: var(--color-grey200);
            padding: 0 1rem;
            font-size: 16px;
            outline: none;

            &::placeholder {
                color: var(--color-grey400);
            }
        }

        & > svg {
            height: unset;
            width: 25px;
        }
    }

    .disabled {
        border: 2px solid #798988;
        box-shadow: none;
        background-color: #798988;
        color: var(--color-grey400);
    }


`