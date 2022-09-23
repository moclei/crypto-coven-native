import {
  Inconsolata_400Regular,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import AppLoading from "expo-app-loading";
import React, { ReactNode } from "react";
import styled from "styled-components/native";

type StyledTitleProps = {
  color: string;
  opacity: number;
};
const StyledSubtitle = styled.Text<StyledTitleProps>`
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.color || "black"};
  opacity: ${(props) => props.opacity || 1};
  text-transform: uppercase;
  padding: 24px;
`;

interface TitleProps {
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
  opacity?: number;
}
export default function Subtitle({
  children,
  style,
  color,
  opacity,
}: TitleProps): JSX.Element {
  return (
    <StyledSubtitle
      color={color}
      opacity={opacity}
      style={[{ fontFamily: "Inconsolata_400Regular" }, style]}
    >
      {children}
    </StyledSubtitle>
  );
}
