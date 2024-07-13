import styled from "styled-components";
import { device } from "../../utils/global-constants";

export const TitleDiv = styled.div`
    width: 100%;
`

export const ProjectTitle = styled.h1`
    text-align: left;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 2rem;
    color: var(--pallet-4);
    padding-bottom: 3px;
    border-bottom: 2px solid var(--pallet-3);

    @media ${device.mobileL} {
        font-size: 3rem;
    }
`
