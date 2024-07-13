import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/global-constants";

export const ContactPage = styled.div`
    
    @media ${device.tablet} {
        height: 100vh;
    }
`
export const ContactDesc = styled.div`
    max-width: 60%;
    line-height: 1.5;
    font-family: 'Nunito';
    font-weight: 200;
    font-size: 1.5em;
    color: var(--pallet-4);

    @media ${device.tablet} {
        max-width: 100%;
        font-weight: 400;
    }
`

export const ContactForm = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1em;

    @media ${device.tabletS} {
        grid-template-columns: 1fr;
    }

    @media ${device.mobileL} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.mobileM} {
        grid-template-columns: 1fr;
    }
`

export const LinkDesc = styled.div`
    text-decoration: none;
    color: var(--pallet-3);
    font-family: 'Nunito';
    font-size: 1.2em;
`

export const LinkDiv = styled.div`
    font-size: 1.7em;
    text-decoration: none;
    color: black;

    @media ${device.mobileL} {
        font-size: 1.5em;
    }
    @media ${device.mobileM} {
        font-size: 1.8em;
    }
`

export const LinkedinLink = styled(Link) `
    text-decoration: none; 
    color: var(--pallet-4);
    text-wrap: nowrap;
`