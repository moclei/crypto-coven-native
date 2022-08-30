import { useNavigation } from "@react-navigation/core";
import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

import { LandingNavProps, RootStackParamList } from "../../App";
import MainTitle from "../../components/main-title/MainTitle";

const StyledApp = styled.View`
  width: 100%;
  height: 100%;
  background: #eeeeee;
`;

export default function Landing({ navigation }): JSX.Element {
  /*const navigation = useNavigation<
    DrawerScreenProps<RootStackParamList, "Landing">["navigation"]
  >();*/

  return (
    <StyledApp>
      <MainTitle />
    </StyledApp>
  );
}
