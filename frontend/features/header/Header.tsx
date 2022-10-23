import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import ConnectWalletButton from "../../components/buttons/connect-wallet-button/ConnectWalletButton";
import MenuButton from "../../components/buttons/menu-button/MenuButton";

const StyledContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /*padding: 0 16px;*/
  padding-top: ${(props) => props.insets.top + 20 + "px"};
  padding-bottom: 12px;
  margin: 0;
  background-color: ${(props) =>
    props.colorOverride
      ? props.colorOverride
      : props.dark
      ? "rgb(30, 33, 37)"
      : "#eee"};
  color: ${(props) => (props.dark ? "white" : "black")};
`;
type HeaderProps = {
  walletAddress: string;
  onConnectPress: () => void;
  isLoading: boolean;
  isConnected: boolean;
  isGuestMode: boolean;
  navigation?: any;
  dark?: boolean;
  showConnect?: boolean;
  colorOverride?: string;
};

export default function Header({
  walletAddress,
  isConnected,
  isLoading,
  onConnectPress,
  navigation,
  dark = false,
  colorOverride,
  showConnect = true,
}: HeaderProps): JSX.Element {
  const insets = useSafeAreaInsets();
  return (
    <StyledContainer dark={dark} insets={insets} colorOverride={colorOverride}>
      <MenuButton navigation={navigation} dark={dark} />
      {showConnect && (
        <ConnectWalletButton
          isLoading={isLoading}
          isConnected={isConnected}
          walletAddress={walletAddress}
          onConnectPress={() => onConnectPress()}
        />
      )}
      {/*!isConnected && !isGuestMode ? (
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
      )*/}
    </StyledContainer>
  );
}
