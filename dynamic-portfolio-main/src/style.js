import styled, { createGlobalStyle } from "styled-components";
import { device } from "./utils/global-constants";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    font-size: 100%;

    @media ${device.tablet} {
      font-size: 75%;
    }
    @media ${device.mobileL} {
      font-size: 60%;
    }
  }

  body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: var(--pallet-4);
    min-height: 100vh;
    background: var(--pallet-2)
  }
`

export const Background = styled.div`
  background: var(--pallet-1);
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
`