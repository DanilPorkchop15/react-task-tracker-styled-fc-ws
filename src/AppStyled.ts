import styled from "styled-components";
import { FlexColStyled, FlexCenterStyled } from "./components/utils";

export const AppStyled = styled.div`
  ${FlexColStyled}
  ${FlexCenterStyled}
  min-height: 100vh;
  max-width: 1176px;
  padding-inline: 20px;
  margin-inline: auto;
  font-family: "Lato", sans-serif;
`;
