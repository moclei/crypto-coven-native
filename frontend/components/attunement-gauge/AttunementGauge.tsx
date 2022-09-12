import React from "react";
import styled from "styled-components/native";

import Overline from "../typography/Overline";

const StyledGaugeContainer = styled.View`
  width: 100%;
  height: 49px;
  padding-bottom: 16px;
`;

const GaugeTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledGaugeBox = styled.View`
  width: 327px;
  height: 8px;
  background: rgba(226, 229, 233, 0.07);
  border-radius: 22px;
`;

type GaugeFillProps = {
  value: number;
};
const StyledGaugeFill = styled.View<GaugeFillProps>`
  height: 8px;
  border-radius: 22px;
  background-color: rgb(224, 175, 132);
  width: ${(props) => 100 / (6 / Math.min(props.value, 6)) + "%"};
`;

interface Body1Props {
  name: string;
  value: number;
}
export default function AttunementGauge({
  name,
  value,
}: Body1Props): JSX.Element {
  return (
    <StyledGaugeContainer>
      <GaugeTitleContainer>
        <Overline style={{ paddingRight: 4 }}>{name}</Overline>
        <Overline opacity={0.5}>{Math.min(value, 6)}/6</Overline>
      </GaugeTitleContainer>
      <StyledGaugeBox>
        <StyledGaugeFill value={value} />
      </StyledGaugeBox>
    </StyledGaugeContainer>
  );
}
