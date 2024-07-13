import styled from "styled-components";
import { device } from "../../../utils/global-constants";

export const ProjectsContainer = styled.div`
    padding: 0 10em;
    margin-top: 6rem;
    
    @media ${device.tablet} {
        padding: 0 4em;
    }
`

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 2fr;
    grid-gap: 20px;

    @media ${device.tabletS} {
        grid-template-columns: 1fr;
    }
`






