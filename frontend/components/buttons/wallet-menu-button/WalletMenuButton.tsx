import {
  Inconsolata_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import MenuExpandIcon from "../../icons/MenuExpandIcon";

const StyledContainer = styled.View`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const VerticalLine = styled.View`
  height: 12px;
  margin: 0 4px 0 8px;
  border: 0.75px solid black;
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
  walletAddress: string;
};

export default function WalletMenuButton({
  walletAddress,
}: ButtonProps): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inconsolata_600SemiBold,
  });
  const onMenuPress = () => {
    console.debug("onMenuPress");
  };
  return (
    <StyledContainer>
      <StyledButton onPress={onMenuPress}>
        <Text
          style={{
            color: "black",
            fontFamily: "Inconsolata_600SemiBold",
            textTransform: "uppercase",
          }}
        >
          {walletAddress.substr(0, 4) +
            "...." +
            walletAddress.substr(
              walletAddress.length - 4,
              walletAddress.length - 1
            )}
        </Text>
        <VerticalLine />
        <MenuExpandIcon />
      </StyledButton>
    </StyledContainer>
  );
}
