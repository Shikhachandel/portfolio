import styled from "styled-components";
import { device } from "../../../utils/global-constants";

export const WorkContainer = styled.div`
    padding: 1em 1em;
    font-size: 1.2rem;
    max-width: 100%;
    box-sizing: border-box;
    overflow-wrap: anywhere;
    word-break: break-word;

    @media ${device.tablet} {
        padding: 0 0 3rem 0;
    }
`
export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;

    @media ${device.mobileL} {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const ProjectHeading = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    min-width: 0;
`
export const Title = styled.h1`
    margin: 0;
    margin-bottom: 0.2rem;
    overflow-wrap: anywhere;
    word-break: break-word;
`
export const ProjectActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`
export const ProjectAction = styled.a`
    display: inline-flex;
    align-items: center;
    min-height: 32px;
    padding: 0 0.7rem;
    border: 1px solid var(--pallet-3);
    border-radius: 6px;
    color: var(--pallet-3);
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
        color: var(--pallet-1);
        background-color: var(--pallet-3);
    }
`

export const WorkDuration = styled.div`
    overflow-wrap: anywhere;
    word-break: break-word;
`

export const SkillsDiv = styled.div`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-bottom: 1rem;
`
export const Skill = styled.li`
    display: inline-block;
    max-width: 100%;
    background-color: var(--pallet-3);
    color: white;
    padding: 8px 12px;
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

export const SectionTitle = styled.h3`
    margin: 0 0 0.6rem;
    font-size: 1rem;
    color: var(--pallet-4);
`

export const ContributionTitle = styled.h3`
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
`

export const ContributionList = styled.div`
    padding-left: 0;
`
export const ContributionItem = styled.h4`
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    min-width: 0;
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;

    &::before {
        content: "";
        width: 0.55rem;
        height: 0.55rem;
        border: 2px solid var(--pallet-3);
        border-radius: 50%;
        flex: 0 0 auto;
        margin-top: 0.25rem;
    }
`
