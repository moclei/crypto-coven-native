import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useMemo } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RootStackParamList } from "../../App";

import AssetListItem from "./AssetListItem";
import ShellListItem from "./ShellListItem";

const StyledAssetList = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #2a2d31;
`;

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
`;

export default function AssetList(): JSX.Element {
  const route = useRoute<RouteProp<RootStackParamList, "AssetList">>();
  const { witches, shell } = route.params;
  const assetsData = useMemo(() => {
    const witchData = witches ? witches : [];
    return [...witchData, shell || null];
  }, [witches, shell]);
  const renderItem = ({ item, index }) => {
    if (item.collection.slug === "sirens-shell") {
      return <ShellListItem data={shell} index={index} />;
    }
    return <AssetListItem data={item} index={index} />;
  };
  return (
    <StyledAssetList>
      <StyledImageBackground
        source={require("../../../assets/image/website-full.png")}
        resizeMode="cover"
      >
        {assetsData && (
          <FlatList
            data={[...witches, shell]}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </StyledImageBackground>
    </StyledAssetList>
  );
}
