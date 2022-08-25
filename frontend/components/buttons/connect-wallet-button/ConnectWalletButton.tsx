import {
  Inconsolata_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled.View`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

type StyledButtonProps = {
  opacity: number;
  size: number;
};
const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 8px 16px;
  margin: 0 16px;
  background-color: transparent;
  color: rgb(30, 33, 37);
  border: 1px solid rgb(30, 33, 37);
  opacity: 1;
  width: 136px;
  border-radius: 8px;

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
};

export default function ConnectWalletButton({
  isConnected,
  isLoading,
  onConnectPress,
}: ButtonProps): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inconsolata_600SemiBold,
  });
  return (
    <StyledContainer>
      <StyledButton onPress={onConnectPress}>
        <Text
          style={{
            color: "black",
            fontFamily: "Inconsolata_600SemiBold",
            textTransform: "uppercase",
          }}
        >
          {isLoading
            ? "Loading..."
            : isConnected
            ? "Connected"
            : "Connect Wallet"}
        </Text>
      </StyledButton>
    </StyledContainer>
  );
}
