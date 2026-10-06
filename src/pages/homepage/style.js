import styled from "styled-components";
import { device } from "../../utils/global-constants";

export const Page = styled.div`
  display: block;

  .dark & {
    --homepage-hover-color: #2dd4bf;
  }
`;

export const HomepageColumns = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 3rem;
  margin-top: 1rem;
  padding: 0 10em;

  @media ${device.laptop} {
    gap: 2rem;
    padding: 0 4em;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 4em;
  }

  @media ${device.mobileL} {
    padding: 0 1rem;
  }
`;
