import styled from "styled-components";

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
  FlexStyled,
  FlexColStyled,
  FlexCenterStyled,
  AlignCenterStyled,
  JustifyCenterStyled,
  JustifyBetweenStyled,
  AlignBaselineStyled,
};
