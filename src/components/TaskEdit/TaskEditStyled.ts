import styled from "styled-components";
import { FlexCenterStyled, FlexColStyled } from "../utils";
import TaskUserSelect from "../TaskUserSelect/TaskUserSelect";

export const TaskEditFormStyled = styled.form`
  ${FlexColStyled}
  ${FlexCenterStyled}
  margin-top: 20px;
  gap: 10px;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  background-color: var(--foreground-color);
  border-radius: 10px;
  box-shadow: var(--shadow);
`;

export const TaskLabelStyled = styled.label`
  ${FlexColStyled}
  margin-bottom: 10px;
`;

export const LabelWithSelect = styled.div`
  ${FlexColStyled}
  align-self: center;
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const TaskUserSelectStyled = styled(TaskUserSelect)`
  border-radius: 10px;
`;
