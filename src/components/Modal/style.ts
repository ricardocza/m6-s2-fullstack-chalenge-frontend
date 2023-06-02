import styled from "styled-components";

export const StyledModal = styled.div`
    position: absolute;
    width: 100vw;
    min-height: 100vh;
    background-color: #020129e6;
    top: -10px;
    left: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
    padding: 40px;
    
    & > form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 80%;
        
        & > div {
            display: flex;
            justify-content: space-between;

            & > div > button {
                padding: 0 1rem;
            }
        }
    }

`