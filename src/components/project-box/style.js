
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/global-constants";

export const BoxContainer = styled.div`
    border: 1px solid var(--pallet-3);
    border-radius: 4px;
    box-shadow: 0px 0px 1px  var(--pallet-3);
    transition: box-shadow 0.4s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 15px 5px var(--pallet-3);
    }
    color: var(--pallet-4);
`

export const ProjectImageBox = styled.div`
    overflow: hidden;
    line-height: 0%;
    height: 200px;

    @media ${device.tabletS} {
        height: auto;
    }
`

export const ProjectImage = styled.img`
    width: 100%;
    max-height: 100%;
    height: -webkit-fill-available;
    object-fit: cover;
    transition: 0.5s ease all;
    border-radius: 4px 4px 0 0;
    &:hover {
        transform: scale(1.3);
    }
    cursor: pointer;

    @media ${device.tabletS} {
        height: 150px;
    }
`


export const ProjectTextContent = styled.div`
    padding: 1rem 2rem;
`

export const ProjectTitle = styled.div`
    padding-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: bold;

    @media ${device.mobileL} {
        font-size: 2rem;
    }
`

export const ProjectDescprition = styled.div`
    color: var(--pallet-4);
    padding-bottom: 1rem;
    font-family: Nunito;
    font-weight: 200;
    
    @media ${device.mobileL} {
        font-size: 1.2rem;
    }
`

export const ProjectLink = styled(Link)`
    text-decoration: none;
    color: var(--pallet-3);
    cursor: pointer;
    &:hover{
        color: var(--pallet-3-hover);
    }
    
    @media ${device.mobileL} {
        font-size: 1.3rem;
    }
`