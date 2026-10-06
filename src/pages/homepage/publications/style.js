import styled from "styled-components";
import { device } from "../../../utils/global-constants";

export const PublicationsContainer = styled.section`
  grid-column: 1 / -1;
  min-width: 0;
  margin-top: 1rem;
  color: var(--pallet-4);
`;

export const PublicationTimeline = styled.div`
  position: relative;
  display: grid;
  row-gap: 2.5rem;
  margin-top: 2rem;
  padding: 1rem;

  &::before {
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: calc(1rem + 130px + 20px);
    width: 2px;
    background: linear-gradient(to bottom, var(--pallet-3), var(--pallet-3-hover));
    content: "";
    opacity: 0.4;

    @media ${device.tabletS} {
      left: calc(1rem + 90px + 18px);
    }

    @media ${device.mobileL} {
      left: calc(1rem + 65px + 14px);
    }
  }
`;

export const PublicationDateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 0.5rem;
`;

export const PublicationYear = styled.div`
  color: var(--pallet-4);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  transition: color 0.3s ease;

  @media ${device.mobileL} {
    font-size: 0.65rem;
  }
`;

export const PublicationVenue = styled(PublicationYear)``;

export const PublicationMarkerColumn = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PublicationMarker = styled.div`
  z-index: 2;
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  border: 2px solid var(--pallet-1);
  border-radius: 50%;
  background: var(--pallet-3);
  box-shadow: 0 0 0 2px var(--pallet-3);
  transition: all 0.3s ease;

  @media ${device.mobileL} {
    width: 11px;
    height: 11px;
  }
`;

export const PublicationContent = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding-left: 1.2rem;
`;

export const PublicationItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 130px 40px minmax(0, 1fr);
  align-items: center;

  @media ${device.tabletS} {
    grid-template-columns: 90px 36px minmax(0, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: 65px 28px minmax(0, 1fr);
  }

  &:hover ${PublicationYear},
  &:hover ${PublicationVenue} {
    color: var(--homepage-hover-color, var(--pallet-3-hover));
  }

  &:hover ${PublicationMarker} {
    background: var(--homepage-hover-color, var(--pallet-3-hover));
    box-shadow: 0 0 0 2px var(--homepage-hover-color, var(--pallet-3-hover)), 0 0 8px 3px rgba(100, 100, 100, 0.2);
    transform: scale(1.3);
  }
`;

export const PublicationTitle = styled.h2`
  margin: 0 0 0.25rem;
  overflow-wrap: anywhere;
  color: var(--pallet-4);
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  transition: color 0.3s ease;

  ${PublicationItem}:hover & {
    color: var(--homepage-hover-color, var(--pallet-3-hover));
  }

  @media ${device.tabletS} {
    font-size: 0.95rem;
  }

  @media ${device.mobileL} {
    font-size: 0.85rem;
  }
`;

export const PublicationMeta = styled.div`
  color: var(--pallet-4);
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.3;
  opacity: 0.75;

  @media ${device.tabletS} {
    font-size: 0.8rem;
  }

  @media ${device.mobileL} {
    font-size: 0.75rem;
  }
`;

export const PublicationDescription = styled.p`
  margin: 0.65rem 0 0;
  overflow-wrap: anywhere;
  color: var(--pallet-4);
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  line-height: 1.45;
  opacity: 0.8;
`;

export const PublicationLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.65rem;
`;

export const PublicationLink = styled.a`
  color: var(--pallet-3);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.15em;

  &:hover {
    color: var(--homepage-hover-color, var(--pallet-3-hover));
  }
`;
