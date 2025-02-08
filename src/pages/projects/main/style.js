import styled from "styled-components";
import { device } from "../../../utils/global-constants";

export const ProjectsContainerGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 100px 1fr;

    @media ${device.tablet} {
        grid-template-rows: 50px 1fr;
    }
`

export const GridItem = styled.div`
    width: 100%;
    justify-items: center;
`
export const GridTitleLayout = styled(GridItem)`
    grid-column-start: 1;
    grid-column-end: 3;
    align-self: center;
`

export const TagLayout = styled(GridItem)`
    background: var(--pallet-2);
    border-radius: 8px;
    height: 500px;

    @media ${device.tablet}{
        display: none
    }
`

export const TagLayoutTitleDiv = styled.div``

export const TagLayoutTitle = styled.h2`
    margin-bottom: 1rem;
    text-align: left;
    padding-left: 2rem;
    cursor: pointer;
`
export const TagLayoutTitleActive = styled(TagLayoutTitle)`
    color: var(--pallet-3-light-surface);
`


export const TagLayoutSkillsDiv = styled.div`
    padding-left: 3rem;
`

export const TagLayoutSkillItems = styled.li`
    list-style: none;
    padding: 0.4rem 0;
    cursor: pointer;
`
export const TagLayoutSkillItemsActive = styled(TagLayoutSkillItems)`
    color: var(--pallet-3-light-surface);
`



// Main content(right) layout css


export const WorkLayout = styled(GridItem)`
    grid-column-start: 2;
    grid-column-end: 3;
    @media ${device.tablet}{
        grid-column-start: 1;
    }
`