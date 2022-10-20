import {
  Inconsolata_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import React, { useMemo } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

type StyledButtonProps = {
  opacity: number;
  size: number;
  dark: boolean;
};
const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  margin: 0 16px;
  background-color: transparent;
  opacity:  ${(props) => (props.dark ? 0.5 : 1)};
  width: 136px;
  border-radius: 8px;
  border-color: ${(props) => (props.dark ? "white" : "rgb(30, 33, 37)")}
  border-width: 1px;
  color: ${(props) => (props.dark ? "white" : "rgb(30, 33, 37)")}
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1.12px; //0.07em;
  text-transform: uppercase;
`;

type ButtonProps = {
  onConnectPress: () => void;
  isLoading: boolean;
  isConnected: boolean;
  dark?: boolean;
  opacity?: number;
  walletAddress: string;
};

export default function ConnectWalletButton({
  isConnected,
  isLoading,
  onConnectPress,
  dark = false,
  walletAddress,
}: ButtonProps): JSX.Element {
  const walletStr = useMemo(() => {
    if (walletAddress) {
      return (
        walletAddress.substr(0, 4) +
        "...." +
        walletAddress.substr(walletAddress.length - 4, walletAddress.length - 1)
      );
    } else return "";
  }, [walletAddress]);

  return (
    <StyledContainer>
      <StyledButton
        onPress={onConnectPress}
        dark={dark}
        opacity={dark ? 0.5 : 1}
      >
        <Text
          style={{
            color: dark ? "white" : "rgb(30, 33, 37)",
            fontFamily: "Inconsolata_600SemiBold",
            opacity: dark ? 0.5 : 1,
            textTransform: "uppercase",
          }}
        >
          {isLoading
            ? "Loading..."
            : isConnected
            ? walletStr
            : "Connect Wallet"}
        </Text>
      </StyledButton>
    </StyledContainer>
  );
}
