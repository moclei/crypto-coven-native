import {
  Inconsolata_400Regular,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import AppLoading from "expo-app-loading";
import React, { ReactNode } from "react";
import styled from "styled-components/native";

type StyledHeader3Props = {
  color: string;
  opacity: number;
};

const StyledBody2 = styled.Text`
  font-size: 16px;
  color: ${(props) => props.color || "white"};
  opacity: ${(props) => props.opacity || 1};
  line-height: 24px;
`;

interface Body2Props {
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
  opacity?: number;
}
export default function Body2({
  children,
  style,
  color,
  opacity,
}: Body2Props): JSX.Element {
  return (
    <StyledBody2
      color={color}
      opacity={opacity}
      style={[{ fontFamily: "Inconsolata_400Regular" }, style]}
    >
      {children}
    </StyledBody2>
  );
}
