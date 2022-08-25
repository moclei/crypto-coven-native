import { useNavigation } from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import styled from "styled-components/native";

import { CovenAsset } from "../../../model/types";
import { RootStackParamList } from "../../App";
import Body1 from "../../components/typography/Body1";

const bg = "https://d3ohv66tlx3ep1.cloudfront.net/shell_bg.png";
const shell = "https://d3ohv66tlx3ep1.cloudfront.net/shell.png";
const glow = "https://d3ohv66tlx3ep1.cloudfront.net/glow.png";

interface StyledClamProps {
  index: number;
}

const StyledClamListItem = styled.TouchableOpacity<StyledClamProps>`
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: white;
  height: 300px;
  display: flex;
  flex: 1;
  padding-right: ${(props) =>
    props.index === 0 || props.index % 2 === 0 ? "12px" : "24px"}
  padding-left: ${(props) =>
    props.index === 0 || props.index % 2 === 0 ? "12px" : "24px"}
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: center;
`;

const StyledTextContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

interface ClamListItemProps {
  data: CovenAsset;
  index: number;
}

type AssetsListProps = NativeStackScreenProps<RootStackParamList, "AssetsList">;
export default function ClamListItem({
  data,
  index,
}: ClamListItemProps): JSX.Element {
  const navigation = useNavigation<AssetsListProps["navigation"]>();
  useEffect(() => {
    // console.debug("ClamListItem, data: ", data);
  }, []);
  const onPress = (asset: CovenAsset) => {
    navigation.navigate("ClamView", {
      asset: asset,
    });
  };
  return (
    <StyledClamListItem index={index} onPress={() => onPress(data)}>
      <StyledImage source={{ uri: data.asset_contract.image_url }} />
      <StyledTextContainer>
        <Body1>{data.name}</Body1>
      </StyledTextContainer>
    </StyledClamListItem>
  );
}
