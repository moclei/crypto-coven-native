import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useMemo } from "react";
import styled from "styled-components/native";

import { CovenAsset } from "../../../model/types";
import { capitalizeFirst, getTrait } from "../../../util/helpers";
import { RootStackParamList } from "../../App";
import AttunementGauge from "../../components/attunement-gauge/AttunementGauge";
import Body1 from "../../components/typography/Body1";
import Body2 from "../../components/typography/Body2";
import Overline from "../../components/typography/Overline";

interface StyledItemProps {
  index: number;
}

const StyledScrollView = styled.ScrollView`
  width: 100%;
`;

const StyledImageBackground = styled.ImageBackground`
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  display: flex;
  flex: 1;
  padding: 24px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 400px;
  padding: 24px;
`;

const StyledTextContainer = styled.View`
  padding-top: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const AttunementsContainer = styled.View`
  padding-top: 20px;
  height: 298px;
  display: flex;
`;

interface AssetViewProps {
  data: CovenAsset;
  index: number;
}

export default function AssetView({
  data,
  index,
}: AssetViewProps): JSX.Element {
  const route = useRoute<RouteProp<RootStackParamList, "AssetView">>();
  const asset = useMemo(() => {
    return route.params.asset;
  }, [route]);
  useEffect(() => {
    /* console.debug(
      "Trait types: ",
      route.params.asset.traits.map((t) => t.trait_type)
    );*/
    /*route.params.asset.traits.forEach((t) =>
      console.debug("* " + JSON.stringify(t))
    );*/
  }, [route]);
  const className = useMemo(() => {
    return getTrait(asset, "Archetype of Power") || "Unknown";
  }, [route]);
  const horoscope = useMemo(() => {
    const sunSign = getTrait(asset, "Sun Sign");
    const moonSign = getTrait(asset, "Moon Sign");
    const risingSign = getTrait(asset, "Rising Sign");
    return sunSign + " // " + moonSign + " // " + risingSign || "Unknown";
  }, [route]);

  const will = useMemo(() => {
    return parseInt(getTrait(asset, "Will"));
  }, [route]);
  const wit = useMemo(() => {
    return parseInt(getTrait(asset, "Wit"));
  }, [route]);
  const wiles = useMemo(() => {
    return parseInt(getTrait(asset, "Wiles"));
  }, [route]);
  const wisdom = useMemo(() => {
    return parseInt(getTrait(asset, "Wisdom"));
  }, [route]);
  const wonder = useMemo(() => {
    return parseInt(getTrait(asset, "Wonder"));
  }, [route]);
  const woe = useMemo(() => {
    return parseInt(getTrait(asset, "Woe"));
  }, [route]);
  return (
    <StyledImageBackground
      source={require("../../../assets/image/website-full.png")}
      resizeMode="cover"
      index={index}
    >
      <StyledScrollView>
        <StyledImage source={{ uri: asset.image_original_url }} />
        <StyledTextContainer>
          <Overline>name</Overline>
          <Body2>{capitalizeFirst(asset.name)}</Body2>
        </StyledTextContainer>
        <StyledTextContainer>
          <Overline>Class</Overline>
          <Body2>{capitalizeFirst(className)}</Body2>
        </StyledTextContainer>
        <StyledTextContainer>
          <Overline>Horoscope</Overline>
          <Body2>{capitalizeFirst(horoscope)}</Body2>
        </StyledTextContainer>
        <StyledTextContainer>
          <Overline>Description</Overline>
          <Body2>{capitalizeFirst(asset.description)}</Body2>
        </StyledTextContainer>
        <AttunementsContainer>
          <AttunementGauge name={"will"} value={will} />
          <AttunementGauge name={"wit"} value={wit} />
          <AttunementGauge name={"wiles"} value={wiles} />
          <AttunementGauge name={"wisdom"} value={wisdom} />
          <AttunementGauge name={"wonder"} value={wonder} />
          <AttunementGauge name={"woe"} value={woe} />
        </AttunementsContainer>
      </StyledScrollView>
    </StyledImageBackground>
  );
}
