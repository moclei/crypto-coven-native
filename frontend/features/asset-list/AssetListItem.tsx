import { useNavigation } from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { CovenAsset } from "../../../model/types";
import { RootStackParamList } from "../../App";
import LoadingMoon from "../../components/loading/LoadingMoon";
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

type StyledImageProps = {
  witchVisible: boolean;
};
const StyledImage = styled.Image<StyledImageProps>`
  width: 100%;
  height: ${(props) => (props.witchVisible ? "160px" : "1px")};
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.witchVisible ? 1 : 0)};
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
  const [witchVisible, setWitchVisible] = useState(false);
  const windowWidth = Dimensions.get("window").width;
  const onPress = (asset: CovenAsset) => {
    navigation.navigate("AssetView", {
      asset: asset,
    });
  };

  return (
    <StyledALItem index={index} onPress={() => onPress(data)}>
      <StyledImage
        source={{ uri: data.image_original_url }}
        witchVisible={witchVisible}
        onLoadEnd={() => setWitchVisible(true)}
      />
      {!witchVisible && <LoadingMoon diameter={windowWidth / 2 - 48} />}
      <StyledTextContainer>
        <Body1>{data.name}</Body1>
      </StyledTextContainer>
    </StyledALItem>
  );
}
