import {
  Inconsolata_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import AppLoading from "expo-app-loading";
import React, { ReactNode } from "react";
import styled from "styled-components/native";

type StyledBodyProps = {
  color: string;
  opacity: number;
};
const StyledBody1 = styled.Text<StyledBodyProps>`
  font-size: 12px;
  color: ${(props) => props.color || "white"};
  opacity: ${(props) => props.opacity || 1};
  text-transform: uppercase;
`;

interface OverlineProps {
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
  opacity?: number;
}
export default function Overline({
  children,
  style,
  color,
  opacity,
}: OverlineProps): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inconsolata_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyledBody1
        color={color}
        opacity={opacity}
        style={[{ fontFamily: "Inconsolata_800ExtraBold" }, style]}
      >
        {children}
      </StyledBody1>
    );
  }
}
