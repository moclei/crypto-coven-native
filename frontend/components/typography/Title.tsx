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
const StyledTitle = styled.Text<StyledTitleProps>`
  font-size: 40px;
  letter-spacing: 4px;
  color: ${(props) => props.color || "black"};
  opacity: ${(props) => props.opacity || 1};
`;

interface TitleProps {
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
  opacity?: number;
}
export default function Title({
  children,
  style,
  color,
  opacity,
}: TitleProps): JSX.Element {
  return (
    <StyledTitle
      color={color}
      opacity={opacity}
      style={[{ fontFamily: "Gothicus" }, style]}
    >
      {children}
    </StyledTitle>
  );
}
