import { css } from "styled-components";

const FlexStyled = css`
  display: flex;
`;

const FlexColStyled = css`
  ${FlexStyled}
  flex-direction: column;
`;

const FlexCenterStyled = css`
  ${FlexStyled}
  justify-content: center;
  align-items: center;
`;

const AlignCenterStyled = css`
  ${FlexStyled}
  align-items: center;
`;

const JustifyCenterStyled = css`
  ${FlexStyled}
  justify-content: center;
`;

const JustifyBetweenStyled = css`
  ${FlexStyled}
  justify-content: space-between;
`;

const AlignBaselineStyled = css`
  ${FlexStyled}
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
