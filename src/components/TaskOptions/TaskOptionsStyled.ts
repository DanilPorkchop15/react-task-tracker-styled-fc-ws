import styled from "styled-components";
import ButtonStyled from "../ui/Button/ButtonStyled";
import InputStyled from "../ui/Input/InputStyled";
import { AlignCenterStyled, FlexColStyled } from "../utils";
import TaskUserSelect from "../TaskUserSelect/TaskUserSelect";

export const TaskOptionsStyled = styled.div`
  ${FlexColStyled}
  max-width: 666px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const TaskOptionsBlockStyled = styled.div`
  ${AlignCenterStyled}
  width: 100%;
`;

export const NewTaskInputStyled = styled(InputStyled)`
  flex-grow: 1;
  border-radius: 10px 0 0 0;
  box-shadow: var(--shadow);
`;

export const NewTaskButtonStyled = styled(ButtonStyled)`
  border-radius: 0 10px 0 0;
  align-self: stretch;
`;

export const TaskOptionsUserSelectStyled = styled(TaskUserSelect)`
  max-width: 250px;
`;

export const MarkAllButtonStyled = styled(ButtonStyled)`
  flex-grow: 1;
  border-radius: 0 0 0 10px;
`;

export const UnmarkAllButtonStyled = styled(ButtonStyled)`
  flex-grow: 1;
  border-radius: 0 0 10px 0;
`;
