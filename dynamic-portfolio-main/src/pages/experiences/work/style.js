import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../utils/global-constants";

export const WorkContainer = styled.div`
    padding: 1em 4em;
    font-size: 1.2rem;

    @media ${device.tablet} {
        padding: 0 0 3rem 0;
    }
`
export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h1`
    margin: 0;
    margin-bottom: 0.2rem;
`
export const TitleLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: var(--pallet-4);
`
export const WorkPosition = styled.div`
    text-wrap: nowrap
`
export const WorkDuration = styled.div`
    text-wrap: nowrap
`

export const SkillsDiv = styled.div`
    list-style: none;
    display: flex;
    padding-bottom: 1rem;
`
export const Skill = styled.li`
    padding-right: 0.7rem;
    color: var(--pallet-3);
`

export const Brief = styled.div`
    font-family: 'Nunito';
    padding-bottom: 0.7rem;
`

export const ContributionTitle = styled.h3`
    margin: 0;
    margin-bottom: 0.5rem;
`

export const ContributionList = styled.div`
    padding-left: 1rem;
`
export const ContributionItem = styled.h4`
    margin: 0;
    margin-bottom: 0.5rem;
`