import { DrawerScreenProps } from "@react-navigation/drawer";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { RootStackParamList } from "../../../App";
import MenuExpandIcon from "../../icons/MenuExpandIcon";

const StyledContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const VerticalLine = styled.View<StyledButtonProps>`
  height: 12px;
  margin: 0 4px 0 8px;
  border-width: 0.75px;
  border-color: ${(props) => (props.dark ? "white" : "rgb(30, 33, 37)")};
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
  color: rgb(30, 33, 37);
  border-width: 1px;
  border-color: ${(props) => (props.dark ? "white" : "rgb(30, 33, 37)")}
  opacity: 1;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1.12px; //0.07em;
  text-transform: uppercase;
`;

type ButtonProps = {
  walletAddress: string;
  isGuestMode: boolean;
  navigation?: any;
  dark: boolean;
};
type DrawerProps = DrawerScreenProps<RootStackParamList, "Menu">;
export default function WalletMenuButton({
  walletAddress,
  isGuestMode,
  navigation,
  dark,
}: ButtonProps): JSX.Element {
  const onMenuPress = () => {
    navigation.toggleDrawer();
  };
  return (
    <StyledContainer>
      <StyledButton onPress={onMenuPress} dark={dark}>
        <Text
          style={{
            color: dark ? "white" : "black",
            fontFamily: "Inconsolata_600SemiBold",
            textTransform: "uppercase",
          }}
        >
          {isGuestMode
            ? "Menu"
            : walletAddress.substr(0, 4) +
              "...." +
              walletAddress.substr(
                walletAddress.length - 4,
                walletAddress.length - 1
              )}
        </Text>
        <VerticalLine dark={dark} />
        <MenuExpandIcon color={dark ? "white" : "black"} />
      </StyledButton>
    </StyledContainer>
  );
}
