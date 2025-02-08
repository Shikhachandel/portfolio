import styled from "styled-components";
import { device } from "./global-constants";

export const PageContainer = styled.div`
    padding: 1em 10em;

    @media ${device.tablet} {
        padding: 1em 5em ;
    }

    @media ${device.mobileL} {
        padding: 1em 5em ;
    }

    @media ${device.mobileM} {
        padding: 1em 3em ;
    }

    @media ${device.mobileS} {
        padding: 1em 3em ;
    }
`

export const WorkContentDiv = styled.div`
    padding: 2rem 3rem;

    @media ${device.tabletS}{
        padding: 2rem 0rem;
    }
`
export const WorkContentImage = styled.img`
    height: 400px;
    width: 100%;
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
    padding: 2rem 3rem;

    @media ${device.tabletS}{
        padding: 2rem 0rem;
    }
`
export const CollegeContentImage = styled.img`
    height: 400px;
    width: 100%;
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
`