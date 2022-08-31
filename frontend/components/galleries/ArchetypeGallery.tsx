import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components/native";

import { WitchArchetype } from "../../../model/types";

const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

type ImageBoxProps = {
  size: number;
};
//  width: ${(props) => props.size + "px"};
const StyledImageBox = styled.Image<ImageBoxProps>`
  height: ${(props) => props.size + "px"};
  width: 50%;
  padding: 0 8px;
`;

const seers = {
  first: require("../../../assets/image/lore/seer1.png"),
  second: require("../../../assets/image/lore/seer2.png"),
  third: require("../../../assets/image/lore/seer3.png"),
  fourth: require("../../../assets/image/lore/seer4.png"),
  fifth: require("../../../assets/image/lore/seer5.png"),
  sixth: require("../../../assets/image/lore/seer6.png"),
};

const enchantresses = {
  first: require("../../../assets/image/lore/enchantress1.png"),
  second: require("../../../assets/image/lore/enchantress2.png"),
  third: require("../../../assets/image/lore/enchantress3.png"),
  fourth: require("../../../assets/image/lore/enchantress4.png"),
  fifth: require("../../../assets/image/lore/enchantress5.png"),
  sixth: require("../../../assets/image/lore/enchantress6.png"),
};

const mages = {
  first: require("../../../assets/image/lore/mage1.png"),
  second: require("../../../assets/image/lore/mage2.png"),
  third: require("../../../assets/image/lore/mage3.png"),
  fourth: require("../../../assets/image/lore/mage4.png"),
  fifth: require("../../../assets/image/lore/mage5.png"),
  sixth: require("../../../assets/image/lore/mage6.png"),
};

const hags = {
  first: require("../../../assets/image/lore/hag1.png"),
  second: require("../../../assets/image/lore/hag2.png"),
  third: require("../../../assets/image/lore/hag3.png"),
  fourth: require("../../../assets/image/lore/hag4.png"),
  fifth: require("../../../assets/image/lore/hag5.png"),
  sixth: require("../../../assets/image/lore/hag6.png"),
};

const occultists = {
  first: require("../../../assets/image/lore/occultist1.png"),
  second: require("../../../assets/image/lore/occultist2.png"),
  third: require("../../../assets/image/lore/occultist3.png"),
  fourth: require("../../../assets/image/lore/occultist4.png"),
  fifth: require("../../../assets/image/lore/occultist5.png"),
  sixth: require("../../../assets/image/lore/occultist6.png"),
};
const necromancers = {
  first: require("../../../assets/image/lore/necromancer1.png"),
  second: require("../../../assets/image/lore/necromancer2.png"),
  third: require("../../../assets/image/lore/necromancer3.png"),
  fourth: require("../../../assets/image/lore/necromancer4.png"),
  fifth: require("../../../assets/image/lore/necromancer5.png"),
  sixth: require("../../../assets/image/lore/necromancer6.png"),
};

type ArchetypeGalleryType = {
  archetype: WitchArchetype;
};
export default function ArchetypeGallery({
  archetype,
}: ArchetypeGalleryType): JSX.Element {
  const [images, setImages] = useState(null);
  useEffect(() => {
    if (!images) {
      switch (archetype) {
        case WitchArchetype.ENCHANTRESS:
          setImages(enchantresses);
          break;
        case WitchArchetype.HAG:
          setImages(hags);
          break;
        case WitchArchetype.MAGE:
          setImages(mages);
          break;
        case WitchArchetype.NECROMANCER:
          setImages(necromancers);
          break;
        case WitchArchetype.OCCULTIST:
          setImages(occultists);
          break;
        case WitchArchetype.SEER:
          setImages(seers);
          break;
        default:
          break;
      }
    }
  }, []);

  if (!images) return null;
  return (
    <StyledContainer>
      <StyledImageBox size={162} source={images.first} />
      <StyledImageBox size={162} source={images.second} />
      <StyledImageBox size={162} source={images.third} />
      <StyledImageBox size={162} source={images.fourth} />
      <StyledImageBox size={162} source={images.fifth} />
      <StyledImageBox size={162} source={images.sixth} />
    </StyledContainer>
  );
}
