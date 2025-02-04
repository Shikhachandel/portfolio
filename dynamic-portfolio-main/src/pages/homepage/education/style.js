import styled from "styled-components";
import { device } from "../../../utils/global-constants";

export const ExpContainer = styled.div`
    margin-top: 2rem;
    padding: 0 10em;
    color: var(--pallet-4);
        
    @media ${device.tablet} {
        padding: 0 4em;
    }
`

export const EducationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 2fr;
    grid-gap: 20px;

    @media ${device.tabletS} {
        grid-template-columns: 1fr;
    }
`