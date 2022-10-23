import { useNavigation } from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import styled from "styled-components/native";

import { CovenAsset } from "../../../model/types";
import { RootStackParamList } from "../../App";
import AssetImage from "../../components/image/AssetImage";
import LoadingMoon from "../../components/loading/LoadingMoon";
import Body1 from "../../components/typography/Body1";

interface StyledShellProps {
  index: number;
}

const StyledShellListItem = styled.TouchableOpacity<StyledShellProps>`
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

const StyledTextContainer = styled.View`
  display: flex;
  flex: 1;
  idth: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

interface ShellListItemProps {
  data: CovenAsset;
  index: number;
}

type AssetListProps = NativeStackScreenProps<RootStackParamList, "AssetList">;
export default function ShellListItem({
  data,
  index,
}: ShellListItemProps): JSX.Element {
  const navigation = useNavigation<AssetListProps["navigation"]>();
  const [witchVisible, setWitchVisible] = useState(false);
  const onPress = (asset: CovenAsset) => {
    navigation.navigate("ShellView", {
      asset: asset,
    });
  };
  return (
    <StyledShellListItem index={index} onPress={() => onPress(data)}>
      <AssetImage
        imageUrl={data.image_original_url}
        witchVisible={witchVisible}
        handleLoad={() => setWitchVisible(true)}
      />
      {!witchVisible && <LoadingMoon height={160} diameter={60} />}
      <StyledTextContainer>
        <Body1>{data.name}</Body1>
      </StyledTextContainer>
    </StyledShellListItem>
  );
}
