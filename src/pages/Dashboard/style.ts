import styled from 'styled-components'

export const StyledDashboard = styled.div`
position: relative;
    & > main > section {
        margin-top: 44px;
        padding: 0 1.5rem;

        & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 20px;

            & > a {
                width: 70%;
                padding: 1rem 0;
                text-align: center;
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

    }
    
    
`

