import styled from "styled-components";
import { device } from "../../../utils/global-constants";

export const ExpertiseContent = styled.div`
    padding: 4em 10em;
    display: block;

    @media ${device.tablet} {
        font-size: 1em;
        padding: 4em 4em;
    }

    @media ${device.tabletS} {
        font-size: 1.3em;
        padding: 4em 5em;
    }

    @media ${device.mobileL} {
        padding: 4em 3em;
    }
`

export const ExpertiseContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media ${device.tabletS} {
       flex-direction: column;
    }
`

export const Box = styled.div`
    width: -webkit-fill-available;
    border: 3px solid var(--pallet-2);
    padding: 0 10px;
    box-shadow: 2px 2px 10px var(--pallet-3);
    background: var(--pallet-2);

    @media ${device.tabletS} {
        margin: 0.8em;
        border-radius: 3em;
    }
`

export const BoxTitleDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;

    @media ${device.tabletS} {
        justify-content: center;
    }
`

export const BoxHeading = styled.div`
    text-align: center;
    padding: 10px;
    color: var(--pallet-4);
`

export const BoxIcon = styled.img`
    max-width: 40px;
    filter: invert(${props => props.$theme || 0});
`

export const SvcContainer = styled(Box)`
    border-bottom-left-radius: 3em;

    @media ${device.tabletS} {
        border-top-right-radius: 0;
    }
`

export const BackendContainer = styled(Box)`
`

export const FrontendContainer = styled(Box)`
    border-bottom-left-radius: 0;
    border-top-right-radius: 2em;
`

export const BoxDescDiv = styled.div`
    margin: 0px 20px 10px 20px;
    color: var(--pallet-4);
`

export const BoxDescTag = styled.div`
    padding: 1rem 0;
`

export const BoxDescQuote = styled.div`
    border-left: 2px solid var(--pallet-3);
    padding-left: 10px;
    margin-left: 20px;
`