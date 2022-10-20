import { Feather } from "@expo/vector-icons";
import React from "react";
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
  color: rgb(30, 33, 37);
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1.12px; //0.07em;
  text-transform: uppercase;
`;

type ButtonProps = {
  navigation?: any;
  dark: boolean;
};
export default function MenuButton({
  navigation,
  dark,
}: ButtonProps): JSX.Element {
  const onMenuPress = () => {
    navigation.toggleDrawer();
  };
  return (
    <StyledContainer>
      <StyledButton onPress={onMenuPress} dark={dark}>
        <Feather name="menu" size={24} color={dark ? "white" : "black"} />
      </StyledButton>
    </StyledContainer>
  );
}
