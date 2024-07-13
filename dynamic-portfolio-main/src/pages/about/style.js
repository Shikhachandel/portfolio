import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "../../utils/global-constants";

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 2fr;
    text-align: center;
    justify-content: center;

    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }

    @media ${device.mobileL} {
        grid-template-columns: 1fr;
    }
      
`

export const LeftContainer = styled.div`
      padding-bottom: 2rem;
`

export const RightContainer = styled.div`
    font-size: 1.2rem;
    text-align: left;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
`

export const LeftContent = styled.div`
    font-size: 25px;
    text-align: left;
`

export const RightContent = styled.p`
    color: var(--pallet-4);
    @media ${device.tablet} {
        font-size: 1.3em;
    }
`

const headingsStyle = css`
    margin: 5px;
    color: var(--pallet-4);
    font-size: 3rem;
`;

export const H1 = styled.h1`
    ${headingsStyle}
`
export const H2 = styled.h2`
    ${headingsStyle};
    font-size: 25px;
`

export const Dash = styled.span`
    content: "";
    width: 3rem;
    border-top: 5px solid var(--pallet-3);
    display: inline-flex;
    position: relative;
    top: -10px;
`

export const Contacts = styled.div `
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 2rem;
`

export const Button = styled(Link)`
    text-decoration: none;
    text-wrap: nowrap;
    background: var(--pallet-4);
    border-radius: 20px;
    padding: 12px 25px;
    font-size: 14px;
    color: var(--pallet-1);
`

export const Resume = styled(Link)`
    text-decoration: none;
    text-wrap: nowrap;
    color: var(--pallet-4);
    font-size: 1.3rem;
    border-bottom: 1px solid var(--pallet-3);

    @media ${device.tablet} {
        font-size: 1.6rem;
    }
`

export const LogoIcon = styled(Link) `
    top: 4px;
    position: relative;
`

export const LogoImgButton = styled.img`
    ${Button};
    height: 34px;
    filter: invert(${props => props.$theme || 0});
`

export const ProjectLink = styled(Link)`
    text-decoration: none;
    color: var(--pallet-3);
`