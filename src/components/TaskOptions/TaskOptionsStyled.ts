import styled from "styled-components";
import ButtonStyled from "../ui/ButtonStyled";
import InputStyled from "../ui/InputStyled";
import { AlignCenterStyled, FlexColStyled } from "../utils";
import TaskUserSelect from "../TaskUserSelect/TaskUserSelect";

export const TaskOptionsStyled = styled.div`
  ${FlexColStyled}
  margin-bottom: 20px;
  width: 80%;
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
