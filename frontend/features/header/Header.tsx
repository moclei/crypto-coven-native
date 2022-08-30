import {
  Inconsolata_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import React from "react";
import styled from "styled-components/native";

import ConnectWalletButton from "../../components/buttons/connect-wallet-button/ConnectWalletButton";
import WalletMenuButton from "../../components/buttons/wallet-menu-button/WalletMenuButton";

type StyledContainerProps = {
  dark: boolean;
};
const StyledContainer = styled.View`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 16px;
  margin: 0;
  background-color: ${(props) => (props.dark ? "rgb(30, 33, 37)" : "#eee")};
  color: ${(props) => (props.dark ? "white" : "black")};
`;

type HeaderProps = {
  walletAddress: string;
  onConnectPress: () => void;
  isLoading: boolean;
  isConnected: boolean;
  navigation?: any;
  dark?: boolean;
};

export default function Header({
  walletAddress,
  isConnected,
  isLoading,
  onConnectPress,
  navigation,
  dark = false,
}: HeaderProps): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inconsolata_600SemiBold,
  });
  return (
    <StyledContainer dark={dark}>
      {!isConnected ? (
        <ConnectWalletButton
          isLoading={isLoading}
          isConnected={isConnected}
          onConnectPress={() => onConnectPress()}
        />
      ) : (
        <WalletMenuButton
          walletAddress={walletAddress}
          navigation={navigation}
          dark={dark}
        />
      )}
    </StyledContainer>
  );
}
