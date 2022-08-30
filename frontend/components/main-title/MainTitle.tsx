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
  dark: boolean;
};
const StyledMoon = styled.View<MoonStyleProps>`
  border-radius: ${(props) => props.size / 2 + "px"};
  margin-top: 105px;
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  background: ${(props) => (props.dark ? "#773800" : "#fee0c5")};
  border: 1px solid rgba(0, 0, 0, 0.03);
`;
type MainTitleProps = {
  dark?: boolean;
  hideWitchGallery?: boolean;
  size?: number;
  fontSize?: number;
};
export default function MainTitle({
  dark = false,
  hideWitchGallery = false,
  size = 150,
  fontSize = 40,
}: MainTitleProps): JSX.Element {
  return (
    <StyledContainer>
      <StyledMoon size={size} dark={dark} />
      <Title
        style={{
          color: dark ? "white" : "black",
          top: -(size * 0.75),
          fontSize: fontSize,
        }}
      >
        crypto coven
      </Title>
      {!hideWitchGallery && <TitleImageGallery />}
    </StyledContainer>
  );
}
