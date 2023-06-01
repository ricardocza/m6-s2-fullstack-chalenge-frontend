import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --bg-main: #020129;
        --color-primary: #4AB8B1;
        --color-secundary: #EB5757;
        --color-grey500: #191D1C;
        --color-grey400: #4A504F;
        --color-grey300: #6D7B7B;
        --color-grey200: #B3C0BF;
        --color-grey100: #F8F9FA;        
        --green: #1AD042;
        --error: #590606;
        --b-radius8: 8px;
        --b-radius16: 16px;
        --b-radius20: 20px;
        --box-shadow: 0px 4px 11px -2px;
        /* --box-shadow: 0 0 20px -10px;
        --header-height: 80px;
        --graph-height: 500px;
        --graph-width: 900px; */
    }

    * {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;        
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
    }

    html {
        background-color: var(--color-grey300);
        /* overflow-y: hidden; */
    }

    main {
        display: flex;
        flex-direction: column;
        background-color: var(--color-grey400);
        padding-bottom: 50px;
        border-radius: 20px;
        min-height: 84vh;
    }

    h1 {
        color: var(--color-grey100);
        font-size: 24px;
        font-weight: 500;
    }
    
    h2 {
        color: var(--color-grey100);
        font-size: 20px;
        font-weight: 400;
    }
    div + span {
        color: var(--error);
    }
    .formError {
        border: 2px solid var(--error);
    }
`