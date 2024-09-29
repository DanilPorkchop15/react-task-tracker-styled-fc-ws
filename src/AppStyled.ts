import styled from "styled-components";
import { FlexColStyled, FlexCenterStyled } from "./components/utils";

export const AppStyled = styled.div`
  ${FlexColStyled}
  ${FlexCenterStyled}
  min-height: 100vh;
  padding-inline: 20px;
  margin-inline: auto;
  font-family: "Lato", sans-serif;
`;
