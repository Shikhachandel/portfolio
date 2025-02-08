import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../utils/global-constants";

export const HeadersContainer = styled.div`
    color: var(--pallet-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10rem;
    height: 50px;
    position: sticky;
    top: 0;
    -webkit-backdrop-filter: saturate(180%) blur(10px);
    backdrop-filter: saturate(180%) blur(20px);
    z-index: 100000;

    @media ${device.tablet} {
        padding: 20px 4rem;
    }

    @media ${device.mobileL} {
        padding: 20px 3rem;
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: -webkit-fill-available;
`

export const UL = styled.ul`
    padding: 0 10px;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    @media ${device.tabletS} {
        display: ${props => props.$hamburgerStatus};
        flex-direction: column;
        width: -webkit-fill-available;
        position: absolute;
        top: 70px;
        text-align: center;
        left: 0;
        background: var(--pallet-1);
        padding-bottom: 10px;
    }
`
const navAnimation = keyframes`
    0% { opacity: 0 }
    100% {opacity: 1}
`

export const LI = styled.li`
    padding: 0 1rem;
    @media ${device.tabletS} {
        padding: 2rem 0;
        animation: ${navAnimation} 1s ease-in-out forwards;
    }
`

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: var(--pallet-4);
    font-size: 1.2rem;
    position: relative;
    border: none;
    cursor: pointer;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--pallet-3);
        transition: width 0.3s ease-in-out;
    };
    &:hover::after {
        width: 120%;
    };

    @media ${device.tabletS} {
        font-size: 2rem;
    }
`

export const Logo = styled.div`
    font-size: 25px;
    font-weight: 700;
    color: #7d27cd;
    margin-right: auto;
    text-decoration: none;
    cursor: pointer;
    text-wrap: nowrap;

    @media ${device.mobileL} {
    display: block;
    }
`

const fadeIn = keyframes`
    from { opacity: 0}
    to   { opacity: 1}
`
export const FadeInLogo = styled(Logo)`
    animation: 0.5s ease-out 0s 1 ${fadeIn};
`

export const HideLogo = styled(Logo)`
    display: none;
`

export const LogoLink = styled(NavLink)`
    text-decoration: none;
    color: var(--pallet-4);
`

export const ViewImg = styled.img`
    width: 20px;
`

// Burger menu

export const BurgerMenuImg = styled.img`
    max-width: 20px;
    height: fit-content;
    cursor: pointer;
    display: none;
    padding: 10px;

    @media ${device.tabletS} {
        display: block;
        filter: invert(${props => props.$theme});
    }
`