import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 15px
`

export const ButtonContent = styled(Link)`
  padding: 8px 22px;
  border-radius: 20px;
  background: #7d27cd;
  color: white;
  text-decoration: none
`
