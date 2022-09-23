import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { CovenAsset } from "../../../model/types";
import ConnectWalletButton from "../../components/buttons/connect-wallet-button/ConnectWalletButton";
import MainTitle from "../../components/main-title/MainTitle";
import Subtitle from "../../components/typography/Subtitle";

const StyledMenuContainer = styled.View`
  background-color: #1e2125;
  height: 100%;
  display: flex;
  align-items: center;
`;

// eslint-disable-next-line functional/no-mixed-type
type MenuDrawerProps = {
  navigation: any;
  witches: CovenAsset[];
  shell: CovenAsset;
  isConnected: boolean;
  isGuestMode: boolean;
  isLoading: boolean;
  onConnectPress: () => void;
};
export default function MenuDrawer({
  navigation,
  witches,
  shell,
  isConnected,
  isGuestMode,
  isLoading,
  onConnectPress,
}: MenuDrawerProps) {
  const onHomePress = () => {
    navigation.navigate("Landing");
  };
  const onWitchesPress = () => {
    navigation.navigate("AssetStack", {
      params: {
        shell: shell,
        witches: witches,
      },
      screen: "AssetList",
    });
  };
  const onCreatorsPress = () => {
    navigation.navigate("LoreStack");
  };

  return (
    <StyledMenuContainer>
      <MainTitle hideWitchGallery dark size={90} fontSize={32} />
      <TouchableOpacity onPress={onHomePress}>
        <Subtitle color={"#FFF"} opacity={0.5}>
          Home
        </Subtitle>
      </TouchableOpacity>
      {!isGuestMode && (
        <TouchableOpacity onPress={onWitchesPress}>
          <Subtitle color={"#FFF"} opacity={0.5}>
            Witches
          </Subtitle>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onCreatorsPress}>
        <Subtitle color={"#FFF"} opacity={0.5}>
          Lore
        </Subtitle>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
      <View style={{ height: 180 }}>
        <ConnectWalletButton
          dark={true}
          isLoading={isLoading}
          isConnected={isConnected}
          onConnectPress={onConnectPress}
        />
      </View>
    </StyledMenuContainer>
  );
}
