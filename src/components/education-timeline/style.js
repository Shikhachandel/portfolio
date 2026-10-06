import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/global-constants";

export const TimelineContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  padding: 1rem;
`;

export const TimelineLine = styled.div`
  position: absolute;
  z-index: 0;
  top: 1rem;
  bottom: 1rem;
  left: calc(1rem + 130px + 20px);
  width: 2px;
  background: linear-gradient(to bottom, var(--pallet-3), var(--pallet-3-hover));
  opacity: 0.4;
  pointer-events: none;

  @media ${device.tabletS} {
    left: calc(1rem + 90px + 18px);
  }

  @media ${device.mobileL} {
    left: calc(1rem + 65px + 14px);
  }
`;

export const TimelineDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 0.5rem;
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

export const TimelineDegree = styled.div`
  margin-bottom: 0.25rem;
  overflow-wrap: anywhere;
  color: var(--pallet-4);
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  transition: color 0.3s ease;

  @media ${device.tabletS} {
    font-size: 0.95rem;
  }

  @media ${device.mobileL} {
    font-size: 0.85rem;
  }
`;

export const TimelineTitle = styled.div`
  overflow-wrap: anywhere;
  color: var(--pallet-4);
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.3;
  opacity: 0.75;
  transition: all 0.3s ease;

  @media ${device.tabletS} {
    font-size: 0.8rem;
  }

  @media ${device.mobileL} {
    font-size: 0.75rem;
  }
`;

export const TimelineMarker = styled.div`
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

export const TimelineMarkerLink = styled(Link)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const TimelineInfo = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding-left: 1.2rem;
`;

export const TimelineItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 130px 40px minmax(0, 1fr);
  align-items: center;
  margin-bottom: 2.5rem;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.tabletS} {
    grid-template-columns: 90px 36px minmax(0, 1fr);
    margin-bottom: 2rem;
  }

  @media ${device.mobileL} {
    grid-template-columns: 65px 28px minmax(0, 1fr);
    margin-bottom: 1.5rem;
  }

  &:hover ${TimelineMarker} {
    background: var(--homepage-hover-color, var(--pallet-3-hover));
    box-shadow: 0 0 0 2px var(--homepage-hover-color, var(--pallet-3-hover)), 0 0 8px 3px rgba(100, 100, 100, 0.2);
    transform: scale(1.3);
  }

  &:hover ${TimelineDate},
  &:hover ${TimelineDegree},
  &:hover ${TimelineTitle} {
    color: var(--homepage-hover-color, var(--pallet-3-hover));
  }

  &:hover ${TimelineTitle} {
    opacity: 1;
  }
`;
