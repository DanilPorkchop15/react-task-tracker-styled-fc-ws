import styled from "styled-components";
import { FlexCenterStyled, FlexColStyled } from "../utils";
import TaskUserSelect from "../TaskUserSelect/TaskUserSelect";
import InputStyled from "../ui/InputStyled";

export const TaskEditFormStyled = styled.form`
  ${FlexColStyled}
  ${FlexCenterStyled}
  margin-top: 20px;
  gap: 10px;
  gap: 20px;
  align-items: flex-start;
  flex-grow: 1;
  padding: 20px;
  background-color: var(--foreground-color);
  border-radius: 10px;
  box-shadow: var(--shadow);
`;

export const TaskLabelStyled = styled.label`
  ${FlexColStyled}
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
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

export const TaskEditInputStyled = styled(InputStyled)`
  width: 100%;
`;
