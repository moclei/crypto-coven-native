import { useNavigation } from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";

import { CovenAsset } from "../../../model/types";
import { RootStackParamList } from "../../App";
import Body1 from "../../components/typography/Body1";

interface StyledItemProps {
  index: number;
}

const StyledALItem = styled.TouchableOpacity<StyledItemProps>`
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 260px;
  width: 50%;
  padding-right: ${(props) =>
    props.index === 0 || props.index % 2 === 0 ? "12px" : "24px"}
  padding-left: ${(props) =>
    props.index === 0 || props.index % 2 === 0 ? "24px" : "12px"}
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 160px;
  align-items: center;
  justify-content: center;
`;

const StyledTextContainer = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

interface AssetItemListProps {
  data: CovenAsset;
  index: number;
}

type AssetListProps = NativeStackScreenProps<RootStackParamList, "AssetList">;
export default function AssetListItem({
  data,
  index,
}: AssetItemListProps): JSX.Element {
  const navigation = useNavigation<AssetListProps["navigation"]>();
  const onPress = (asset: CovenAsset) => {
    navigation.navigate("AssetView", {
      asset: asset,
    });
  };
  return (
    <StyledALItem index={index} onPress={() => onPress(data)}>
      <StyledImage source={{ uri: data.image_original_url }} />
      <StyledTextContainer>
        <Body1>{data.name}</Body1>
      </StyledTextContainer>
    </StyledALItem>
  );
}
