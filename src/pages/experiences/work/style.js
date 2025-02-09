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
    text-wrap: nowrap
`
export const TitleLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: var(--pallet-3);
`
export const WorkPosition = styled.div`
    margin: 0;
    text-wrap: nowrap;
    color: var(--pallet-3);
`
export const WorkDuration = styled.div`
    text-wrap: nowrap
    padding-left: 6rem;
`
export const WorkLocation = styled.div`
    padding-left: 6rem;
    text-wrap: nowrap;
`

export const SkillsDiv = styled.div`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 3 rem;
`
export const Skill = styled.li`
    display: inline-block;
    background-color: var(--pallet-3);
    color: white;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: var(--pallet-4);
        transform: scale(1.1);
    }
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