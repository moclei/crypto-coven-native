import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RootStackParamList } from "../../App";

import AssetListItem from "./AssetListItem";
import ClamListItem from "./ClamListItem";

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
  padding-top: 24px;
`;

export default function AssetList(): JSX.Element {
  const route = useRoute<RouteProp<RootStackParamList, "AssetsList">>();
  const { witches, clam } = route.params;
  /*  useEffect(() => {
    if (assets && assets.length > 0) {
      // console.debug("# of Assets: ", assets.length);
    }
  }, [assets]);*/
  const renderItem = ({ item }) => {
    if (item.collection.slug === "sirens-shell") {
      return <ClamListItem data={clam} index={clam.id} />;
    }
    return <AssetListItem data={item} index={item.id} />;
  };
  return (
    <StyledAssetList>
      <StyledImageBackground
        source={require("../../../assets/image/website-full.png")}
        resizeMode="cover"
      >
        <FlatList
          data={[...witches, clam]}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </StyledImageBackground>
    </StyledAssetList>
  );
}
