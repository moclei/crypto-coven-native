import {
  Inconsolata_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import ConnectWalletButton from "../../components/buttons/connect-wallet-button/ConnectWalletButton";
import WalletMenuButton from "../../components/buttons/wallet-menu-button/WalletMenuButton";

type StyledContainerProps = {
  dark: boolean;
  insets: any;
};
const StyledContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  /*padding: 0 16px;*/
  padding-top: ${(props) => props.insets.top + 20 + "px"};
  padding-bottom: 12px;
  margin: 0;
  background-color: ${(props) => (props.dark ? "rgb(30, 33, 37)" : "#eee")};
  color: ${(props) => (props.dark ? "white" : "black")};
`;
//  background-color: lightgreen;
type HeaderProps = {
  walletAddress: string;
  onConnectPress: () => void;
  isLoading: boolean;
  isConnected: boolean;
  isGuestMode: boolean;
  navigation?: any;
  dark?: boolean;
};

export default function Header({
  walletAddress,
  isConnected,
  isLoading,
  isGuestMode,
  onConnectPress,
  navigation,
  dark = false,
}: HeaderProps): JSX.Element {
  const insets = useSafeAreaInsets();
  return (
    <StyledContainer dark={dark} insets={insets}>
      {!isConnected && !isGuestMode ? (
        <ConnectWalletButton
          isLoading={isLoading}
          isConnected={isConnected}
          onConnectPress={() => onConnectPress()}
        />
      ) : (
        <WalletMenuButton
          isGuestMode={isGuestMode}
          walletAddress={walletAddress}
          navigation={navigation}
          dark={dark}
        />
      )}
    </StyledContainer>
  );
}
