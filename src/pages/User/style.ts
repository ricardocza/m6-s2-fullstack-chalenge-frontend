import styled from "styled-components";

export const StyledUser = styled.div`
    position: relative;
    overflow: hidden;

    & > main > section {
        margin-top: 44px;
        padding: 0 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 32px;
        & > p {
            color: var(--color-grey100);
        }
        & > a {
            width: fit-content;
            padding: 0 1rem;
            border: 1px solid var(--bg-main);
            border-radius: 8px;
            color: var(--bg-main);
        }
    }
    & > main + div {
        position: absolute;
        bottom: 50px;
        width: 100%;        
        & > div {
            display: flex;
            justify-content: center;
            
            & > button {                
                width: 50%;            
                background-color: var(--color-grey300);
                color: #153b45;
            }
        }
    }
    
`