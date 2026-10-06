import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../utils/global-constants";

export const MainContent = styled.div`
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    align-items: start;
    gap: 2rem;
    max-width: 1440px;
    padding: 1rem 3rem 0;
    margin: 1rem auto 0;

    @media ${device.tablet} {
        grid-template-columns: 240px minmax(0, 1fr);
        gap: 1.25rem;
        padding: 1rem 2rem 0;
    }

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
    }
`

export const ProfileColumn = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
`;

export const IntroContent = styled.div`
    min-width: 0;
    width: 100%;
`;

export const Heading = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const HeadingText = styled.div`
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    text-align: center;
`;

export const HeadingTitle = styled.h1`
    font-size: clamp(1.5rem, 2.2vw, 2.3rem);
    line-height: 1.25;
    margin-block-end: 0.55em;
    margin-block-start: 0;
    color: var(--pallet-4);
    text-align: center;
    text-wrap: balance;

    @media ${device.mobileL} {
        font-size: 1.5rem;
    }
    @media ${device.mobileM} {
        font-size: 1.3rem;
    }
`

export const HeadingSubtitle = styled.p`
    margin: 0;
    font-size: clamp(1.35rem, 2vw, 2rem);
    line-height: 1.35;
    color: var(--pallet-3);
    text-align: center;
    text-wrap: balance;
`;

export const ProfileImage = styled.img`
    width: 260px;
    height: 260px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid color-mix(in srgb, var(--pallet-3) 45%, transparent);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
    opacity: 0.94;
    transform: translateY(-0.4rem);
    mask-image: radial-gradient(circle, #000 62%, rgba(0, 0, 0, 0.82) 78%, transparent 100%);
    margin: 0;

    @media ${device.tablet} {
        width: 220px;
        height: 220px;
    }

    @media ${device.mobileL} {
        width: 160px;
        height: 160px;
    }
`

export const SocialLinks = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin: 1.25rem auto 0;
`

export const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 42px;
    padding: 0 1rem;
    border: 1px solid color-mix(in srgb, var(--pallet-3) 55%, transparent);
    border-radius: 8px;
    background: color-mix(in srgb, var(--pallet-2) 70%, var(--pallet-4) 30%);
    color: var(--pallet-4);
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, border-color 0.2s ease;

    &:hover {
        border-color: var(--pallet-3);
        transform: translateY(-2px);
    }
`

export const SocialIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`

export const Description = styled.p`
    font-size: 20px;
    color: var(--pallet-4);
    line-height: 1.5;
    max-width: 900px;
    margin: 1rem auto 0;
    padding: 1.5rem 2rem;
    text-align: center;
    background: color-mix(in srgb, var(--pallet-2) 82%, var(--pallet-4) 18%);
    border: 1px solid color-mix(in srgb, var(--pallet-3) 45%, transparent);
    border-radius: 8px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);

    @media ${device.mobileL} {
        font-size: 1.25rem;
        padding: 1rem;
    }
`

export const HighlightContent = styled.span`
    color: #ffffff;
    font-weight: 800;
    -webkit-text-stroke: 1px var(--pallet-3);
    paint-order: stroke fill;
    text-shadow:
        -1px -1px 0 var(--pallet-3),
        1px -1px 0 var(--pallet-3),
        -1px 1px 0 var(--pallet-3),
        1px 1px 0 var(--pallet-3);
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
