import styled from "styled-components";
import { device } from "../../utils/global-constants";

export const AboutContainer = styled.section`
    max-width: 900px;
    margin: 1.5rem auto 5rem;
    text-align: center;
    color: var(--pallet-4);

    @media ${device.mobileL} {
        margin-top: 1rem;
    }
`

export const H1 = styled.h1`
    margin: 0;
    font-size: 3.4rem;
    line-height: 1.15;
    color: var(--pallet-4);

    @media ${device.tabletS} {
        font-size: 2.8rem;
    }
`

export const H2 = styled.h2`
    margin: 0.75rem 0 0;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--pallet-3);
`

export const Contacts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0;
`

export const ContactLink = styled.a`
    text-decoration: none;
    color: var(--pallet-1);
    background: var(--pallet-4);
    border-radius: 20px;
    padding: 12px 24px;
    font-size: 0.95rem;
    line-height: 1;
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
        background: var(--pallet-3);
        color: var(--pallet-1);
    }
`

export const LogoIcon = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

export const LogoImgButton = styled.img`
    height: 24px;
    width: 24px;
    border-radius: 20px;
    padding: 10px;
    background: var(--pallet-4);
    filter: invert(${props => props.$theme || 0});
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
        background: var(--pallet-3);
        transform: translateY(-2px);
    }
`

export const BioBox = styled.div`
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid color-mix(in srgb, var(--pallet-3) 45%, transparent);
    border-radius: 8px;
    background: color-mix(in srgb, var(--pallet-2) 82%, var(--pallet-4) 18%);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
    text-align: left;
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.7;

    p {
        margin: 0;
    }

    p + p {
        margin-top: 1.25rem;
    }

    @media ${device.tabletS} {
        padding: 1.5rem;
        font-size: 1.05rem;
    }
`
