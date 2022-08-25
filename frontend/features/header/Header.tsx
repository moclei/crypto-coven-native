import {
  Inconsolata_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import React from "react";
import styled from "styled-components/native";

import ConnectWalletButton from "../../components/buttons/connect-wallet-button/ConnectWalletButton";
import WalletMenuButton from "../../components/buttons/wallet-menu-button/WalletMenuButton";

const StyledContainer = styled.View`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 16px;
  margin: 0;
  background-color: transparent;
`;

type HeaderProps = {
  walletAddress: string;
  onConnectPress: () => void;
  isLoading: boolean;
  isConnected: boolean;
};

export default function Header({
  walletAddress,
  isConnected,
  isLoading,
  onConnectPress,
}: HeaderProps): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inconsolata_600SemiBold,
  });
  return (
    <StyledContainer>
      {!isConnected ? (
        <ConnectWalletButton
          isLoading={isLoading}
          isConnected={isConnected}
          onConnectPress={() => onConnectPress()}
        />
      ) : (
        <WalletMenuButton walletAddress={walletAddress} />
      )}
    </StyledContainer>
  );
}
