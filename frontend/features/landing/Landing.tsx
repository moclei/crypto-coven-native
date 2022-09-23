import React from "react";
import styled from "styled-components/native";

import MainTitle from "../../components/main-title/MainTitle";

const StyledApp = styled.View`
  width: 100%;
  height: 100%;
  background: #eeeeee;
`;

export default function Landing(): JSX.Element {
  return (
    <StyledApp>
      <MainTitle />
    </StyledApp>
  );
}
