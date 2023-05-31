import styled from "styled-components";

export const StyledUpdateModal = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #020129e6;
    top: 0;
    left: 0;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;    
    padding-top: 40px;
    
    & > form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        
        & > div {
            display: flex;
            justify-content: space-between;

            & > div > button {
                padding: 0 1rem;
            }
        }
    }

`