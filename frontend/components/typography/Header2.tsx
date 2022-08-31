import { useFonts } from "@expo-google-fonts/inconsolata";
import AppLoading from "expo-app-loading";
import React, { ReactNode } from "react";
import styled from "styled-components/native";

type StyledHeader2Props = {
  color: string;
  opacity: number;
};
const StyledHeader2 = styled.Text<StyledHeader2Props>`
  font-size: 40px;
  letter-spacing: 4px;
  color: ${(props) => props.color || "black"};
  opacity: ${(props) => props.opacity || 1};
  padding: 24px 0;
`;

interface Header2Props {
  children: ReactNode;
  style?: React.CSSProperties;
  color?: string;
  opacity?: number;
}
export default function Header2({
  children,
  style,
  color,
  opacity,
}: Header2Props): JSX.Element {
  const [fontsLoaded] = useFonts({
    Eskapade: require("../../../assets/fonts/Eskapade-Fraktur.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyledHeader2
        color={color}
        opacity={opacity}
        style={[{ fontFamily: "Eskapade" }, style]}
      >
        {children}
      </StyledHeader2>
    );
  }
}
