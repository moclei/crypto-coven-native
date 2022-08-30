import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import MainTitle from "../../components/main-title/MainTitle";
import Subtitle from "../../components/typography/Subtitle";

const StyledMenuContainer = styled.View`
  background-color: #1e2125;
  height: 100%;
  display: flex;
  align-items: center;
`;
export default function MenuDrawer({ navigation, witches, shells }) {
  const onHomePress = () => {
    navigation.navigate("Landing");
  };
  const onWitchesPress = () => {
    navigation.navigate("AssetStack", {
      params: {
        shell: shells,
        witches: witches,
      },
      screen: "AssetList",
    });
  };
  const onCreatorsPress = () => {
    console.debug("onCreatorsPress");
  };

  return (
    <StyledMenuContainer>
      <Text>Hello menu</Text>
      <MainTitle hideWitchGallery dark size={90} fontSize={32} />
      <TouchableOpacity onPress={onHomePress}>
        <Subtitle style={{ color: "#FFF" }} opacity={0.5}>
          Home
        </Subtitle>
      </TouchableOpacity>
      <TouchableOpacity onPress={onWitchesPress}>
        <Subtitle style={{ color: "#FFF" }} opacity={0.5}>
          Witches
        </Subtitle>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCreatorsPress}>
        <Subtitle style={{ color: "#FFF" }} opacity={0.5}>
          Creators
        </Subtitle>
      </TouchableOpacity>
    </StyledMenuContainer>
  );
}
