import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/global-constants";

export const TimelineWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem 0;
`;

export const TimelineContainer = styled.div`
  position: relative;
  padding: 0 1rem;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: calc(1rem + 130px + 20px);
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--pallet-3), var(--pallet-3-hover));
  opacity: 0.4;
  z-index: 0;

  @media ${device.tabletS} {
    left: calc(1rem + 90px + 18px);
  }

  @media ${device.mobileL} {
    left: calc(1rem + 65px + 14px);
  }
`;

export const TimelineDateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 0.5rem;
`;

export const TimelineStartDate = styled.div`
  font-size: 0.75rem;
  color: var(--pallet-4);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  line-height: 1.4;
  transition: color 0.3s ease;

  @media ${device.mobileL} {
    font-size: 0.65rem;
  }
`;

export const TimelineEndDate = styled.div`
  font-size: 0.75rem;
  color: var(--pallet-4);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  line-height: 1.4;
  transition: color 0.3s ease;

  @media ${device.mobileL} {
    font-size: 0.65rem;
  }
`;

export const TimelineMarkerCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const TimelineMarker = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--pallet-3);
  border: 2px solid var(--pallet-1);
  box-shadow: 0 0 0 2px var(--pallet-3);
  transition: all 0.3s ease;
  flex-shrink: 0;
  z-index: 2;

  @media ${device.mobileL} {
    width: 11px;
    height: 11px;
  }
`;

export const TimelineMarkerLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const TimelineRightSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.2rem;
`;

export const TimelineDesignation = styled.div`
  font-size: 1.05rem;
  color: var(--pallet-4);
  font-weight: 700;
  margin-bottom: 0.25rem;
  transition: color 0.3s ease;
  line-height: 1.3;

  @media ${device.tabletS} {
    font-size: 0.95rem;
  }

  @media ${device.mobileL} {
    font-size: 0.85rem;
  }
`;

export const TimelineTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--pallet-4);
  opacity: 0.75;
  transition: all 0.3s ease;
  line-height: 1.3;

  @media ${device.tabletS} {
    font-size: 0.8rem;
  }

  @media ${device.mobileL} {
    font-size: 0.75rem;
  }
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 130px 40px 1fr;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
  cursor: pointer;

  @media ${device.tabletS} {
    grid-template-columns: 90px 36px 1fr;
    margin-bottom: 2rem;
  }

  @media ${device.mobileL} {
    grid-template-columns: 65px 28px 1fr;
    margin-bottom: 1.5rem;
  }

  &:hover ${TimelineStartDate},
  &:hover ${TimelineEndDate} {
    color: var(--homepage-hover-color, var(--pallet-3-hover));
  }

  &:hover ${TimelineMarker} {
    background: var(--homepage-hover-color, var(--pallet-3-hover));
    box-shadow: 0 0 0 2px var(--homepage-hover-color, var(--pallet-3-hover)), 0 0 8px 3px rgba(100, 100, 100, 0.2);
    transform: scale(1.3);
  }

  &:hover ${TimelineDesignation} {
    color: var(--homepage-hover-color, var(--pallet-3-hover));
  }

  &:hover ${TimelineTitle} {
    opacity: 1;
    color: var(--homepage-hover-color, var(--pallet-3-hover));
  }
`;
