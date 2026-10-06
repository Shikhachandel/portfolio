import styled from "styled-components";
import { device } from "../../utils/global-constants";

export const Title = styled.h1`
    border-bottom: 2px solid var(--pallet-4);
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    margin: 0;
    margin-bottom: 0.2rem;
    max-width: 100%;
    text-align: center;
    overflow-wrap: anywhere;
    word-break: break-word;

    @media ${device.mobileL} {
        font-size: 2.4rem;
    }
`
