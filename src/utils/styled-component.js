import styled from "styled-components";
import { device } from "./global-constants";

export const PageContainer = styled.div`
    padding: 0.5em 6em 1em;
    max-width: 100%;
    box-sizing: border-box;

    @media ${device.tablet} {
        padding: 0.5em 3em 1em;
    }

    @media ${device.mobileL} {
        padding: 0.5em 1rem 1em;
    }

    @media ${device.mobileM} {
        padding: 0.5em 0.85rem 1em;
    }

    @media ${device.mobileS} {
        padding: 0.5em 0.75rem 1em;
    }
`

export const WorkContentDiv = styled.div`
    padding: 1rem 3rem 2rem;
    max-width: 100%;
    box-sizing: border-box;

    @media ${device.tabletS}{
        padding: 2rem 0rem;
    }
`
export const WorkContentImage = styled.img`
    height: 400px;
    width: 100%;
    max-width: 100%;
    object-fit: cover;

    @media ${device.tabletS}{
        height: 275px;
    }

    @media ${device.mobileL}{
        height: 200px;
    }
`

export const WorkContentDetail = styled.div`
    padding: 2rem 10rem;
    max-width: 100%;
    box-sizing: border-box;
    overflow-wrap: anywhere;
    word-break: break-word;

    @media ${device.tablet}{
        padding: 2rem 4rem;
    }

    @media ${device.tabletS}{
        padding: 2rem 2rem;
    }

    @media ${device.mobileM}{
        padding: 2rem 1rem;
    }
`

export const CollegeContentDiv = styled.div`
    padding: 1rem 3rem 2rem;
    max-width: 100%;
    box-sizing: border-box;

    @media ${device.tabletS}{
        padding: 2rem 0rem;
    }
`
export const CollegeContentImage = styled.img`
    height: 400px;
    width: 100%;
    max-width: 100%;
    object-fit: cover;

    @media ${device.tabletS}{
        height: 275px;
    }

    @media ${device.mobileL}{
        height: 200px;
    }
`

export const CollegeContentDetail = styled.div`
    padding: 2rem 10rem;
    max-width: 100%;
    box-sizing: border-box;
    overflow-wrap: anywhere;
    word-break: break-word;

    @media ${device.tablet}{
        padding: 2rem 4rem;
    }

    @media ${device.tabletS}{
        padding: 2rem 2rem;
    }

    @media ${device.mobileM}{
        padding: 2rem 1rem;
    }
`

export const Sentence = styled.p`
    font-family: 'Nunito';
    font-size: 1.3rem;
    font-weight: 300;
    text-align: justify;
    max-width: 100%;
    overflow-wrap: anywhere;
    word-break: break-word;

    @media ${device.mobileL} {
        font-size: 1.05rem;
        text-align: left;
    }
`
