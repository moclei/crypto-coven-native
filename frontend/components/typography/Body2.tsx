import {
  Inconsolata_400Regular,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import AppLoading from "expo-app-loading";
import React, { ReactNode } from "react";
import styled from "styled-components/native";

const StyledBody1 = styled.Text`
  font-size: 16px;
  color: white;
`;

interface Body2Props {
  children: ReactNode;
}
export default function Body2({ children }: Body2Props): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inconsolata_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <StyledBody1 style={{ fontFamily: "Inconsolata_400Regular" }}>
        {children}
      </StyledBody1>
    );
  }
}
