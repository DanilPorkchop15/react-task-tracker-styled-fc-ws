import styled from "styled-components";
import {
  AlignBaselineStyled,
  FlexColStyled,
  FlexStyled,
  JustifyBetweenStyled,
} from "../utils";

export const TaskStyled = styled.div`
  ${FlexColStyled}
  ${JustifyBetweenStyled}
  width: 80dvw;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--foreground-color);
  transition: background-color 0.2s ease-in-out;
  border: 1px solid var(--primary-color);

  &:hover {
    border: 1px solid black;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);
  }
`;

export const TaskSectionStyled = styled.section`
  ${FlexStyled}
  ${JustifyBetweenStyled}
  ${AlignBaselineStyled}
  flex-grow: 1;
`;

export const TaskBlockStyled = styled.div`
  ${FlexStyled}
  ${AlignBaselineStyled}
  ${JustifyBetweenStyled}
  gap: 40px;
`;

export const TaskActionsStyled = styled.div`
  ${FlexStyled}
  ${AlignBaselineStyled}
  gap: 10px;
`;
