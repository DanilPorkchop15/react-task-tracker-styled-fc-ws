import styled from "styled-components";

const InputStyled = styled.input`
  padding: 10px;
  outline: none;
  border-radius: 10px;
  background-color: var(--input-background-color);
  color: var(--text-color);
  font-size: 16px;
  border: 1px solid var(--input-border-color);
`;

const ButtonStyled = styled.button`
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-wrap: nowrap;

  &:hover {
    filter: brightness(1.1);
  }

  &:disabled {
    filter: grayscale(1) brightness(0.5);
  }
`;

const FlexStyled = styled.div`
  display: flex;
`;

const FlexColStyled = styled(FlexStyled)`
  flex-direction: column;
`;

const FlexCenterStyled = styled(FlexStyled)`
  justify-content: center;
  align-items: center;
`;

const AlignCenterStyled = styled(FlexStyled)`
  align-items: center;
`;

const JustifyCenterStyled = styled(FlexStyled)`
  justify-content: center;
`;

const JustifyBetweenStyled = styled(FlexStyled)`
  justify-content: space-between;
`;

const AlignBaselineStyled = styled(FlexStyled)`
  align-items: baseline;
`;

export {
  InputStyled,
  ButtonStyled,
  FlexStyled,
  FlexColStyled,
  FlexCenterStyled,
  AlignCenterStyled,
  JustifyCenterStyled,
  JustifyBetweenStyled,
  AlignBaselineStyled,
};

