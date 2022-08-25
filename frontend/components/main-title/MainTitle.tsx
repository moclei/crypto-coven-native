import React, { ReactNode } from "react";
import styled from "styled-components/native";

import Title from "../typography/Title";

import TitleImageGallery from "./TitleImageGallery";

const StyledContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

type MoonStyleProps = {
  size: number;
};
const StyledMoon = styled.View<MoonStyleProps>`
  /*box-sizing: border-box;*/
  border-radius: ${(props) => props.size / 2 + "px"};
  margin-top: 105px;
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  /* cc-lighter-orange */
  background: #fee0c5;
  border: 1px solid rgba(0, 0, 0, 0.03);
`;
const size = 150;
export default function MainTitle(): JSX.Element {
  return (
    <StyledContainer>
      <StyledMoon size={size} />
      <Title style={{ top: -(size * 0.75) }}>crypto coven</Title>
      <TitleImageGallery />
    </StyledContainer>
  );
}
