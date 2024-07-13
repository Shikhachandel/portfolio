import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../utils/global-constants";

export const MainContent = styled.div`
    padding: 0 10em;
    margin-top: 5em;

    @media ${device.tablet} {
        padding: 0 4em;
    }
`

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: centre;
`

export const HeadingTitle = styled.h1`
    font-size: 4.5em;
    margin-block-end: 0.3em;
    margin-block-start: 0;
    color: var(--pallet-4);

    @media ${device.mobileL} {
        font-size: 4em;
    }
    @media ${device.mobileM} {
        font-size: 3.7em;
    }
`
export const AmongUsImg = styled.img`
    max-width: 100px;
    object-fit: contain;

    @media ${device.tablet} {
        max-width: 85px;
    }

    @media ${device.mobileL} {
        max-width: 70px;
    }
`

export const Description = styled.p`
    font-size: 20px;
    color: var(--pallet-4);
    line-height: 1.5;
    padding-right: 2em;

    @media ${device.mobileL} {
        font-size: 2rem;
        padding-right: 0;
    }
`

export const HighlightContent = styled.span`
    color: var(--pallet-3);
`

export const HorizontalLineContainer = styled.div`
`

const LineAnimation = keyframes`
    0% { width: 0 }
    100% {width: 30em}
`

export const HorizontalLine = styled.div`
    border-top: 3px dotted var(--pallet-4);
    animation: ${LineAnimation} 1s ease forwards;

    @media ${device.mobileL} {
        max-width: 25em;
    }
`


export const Button = styled.div`
    display: block;
    color: black;
    padding: 2em;
`

export const ButtonBorder = styled(Link)`
    padding: 8px 15px;
    color: var(--pallet-4);;
    background-color: var(--pallet-1);
    border:none;
    border-radius:10px;
    text-decoration: none;
    box-shadow: 0px 0px 2px 2px var(--pallet-3);;
    transition: all 0.8s ease-out;
    &:hover {
        background-color: var(--pallet-4);
        color: var(--pallet-1);
    }
`
