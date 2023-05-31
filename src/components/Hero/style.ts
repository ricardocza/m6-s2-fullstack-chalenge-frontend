import styled from "styled-components";

export const StyledHero = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    position: relative;

    & > img {
        width: 100%;
        opacity: 0.2;
    }

    & > h2 {
        position: absolute;
        width: 95%;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--color-grey100);
    }

`