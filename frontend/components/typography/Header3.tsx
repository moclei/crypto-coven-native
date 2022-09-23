import { useFonts } from "@expo-google-fonts/inconsolata";
import AppLoading from "expo-app-loading";
import React, { ReactNode } from "react";
import styled from "styled-components/native";

type StyledHeader3Props = {
  color: string;
  opacity: number;
};
const StyledHeader3 = styled.Text<StyledHeader3Props>`
  font-size: 32px;
  letter-spacing: 4px;
  color: ${(props) => props.color || "black"};
  opacity: ${(props) => props.opacity || 1};
`;

interface Header3Props {
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
  opacity?: number;
}
export default function Header3({
  children,
  style,
  color,
  opacity,
}: Header3Props): JSX.Element {
  return (
    <StyledHeader3
      color={color}
      opacity={opacity}
      style={[{ fontFamily: "Eskapade" }, style]}
    >
      {children}
    </StyledHeader3>
  );
}
