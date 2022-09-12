import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
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
  index: number;
  width: number;
};
const StyledImageBox = styled.Image<ImageBoxProps>`
  height: ${(props) => props.width / 2 - 34 + "px"};
  width: ${(props) => props.width / 2 - 34 + "px"};
  margin-bottom: 20px;
  margin-right: ${(props) =>
    props.index === 0 || props.index % 2 === 0 ? "10px" : "0"};
  margin-left: ${(props) =>
    props.index === 0 || props.index % 2 === 0 ? "0" : "10px"};
`;

const seers = [
  require("../../../assets/image/lore/seer1.png"),
  require("../../../assets/image/lore/seer2.png"),
  require("../../../assets/image/lore/seer3.png"),
  require("../../../assets/image/lore/seer4.png"),
  require("../../../assets/image/lore/seer5.png"),
  require("../../../assets/image/lore/seer6.png"),
];

const enchantresses = [
  require("../../../assets/image/lore/enchantress1.png"),
  require("../../../assets/image/lore/enchantress2.png"),
  require("../../../assets/image/lore/enchantress3.png"),
  require("../../../assets/image/lore/enchantress4.png"),
  require("../../../assets/image/lore/enchantress5.png"),
  require("../../../assets/image/lore/enchantress6.png"),
];

const mages = [
  require("../../../assets/image/lore/mage1.png"),
  require("../../../assets/image/lore/mage2.png"),
  require("../../../assets/image/lore/mage3.png"),
  require("../../../assets/image/lore/mage4.png"),
  require("../../../assets/image/lore/mage5.png"),
  require("../../../assets/image/lore/mage6.png"),
];

const hags = [
  require("../../../assets/image/lore/hag1.png"),
  require("../../../assets/image/lore/hag2.png"),
  require("../../../assets/image/lore/hag3.png"),
  require("../../../assets/image/lore/hag4.png"),
  require("../../../assets/image/lore/hag5.png"),
  require("../../../assets/image/lore/hag6.png"),
];

const occultists = [
  require("../../../assets/image/lore/occultist1.png"),
  require("../../../assets/image/lore/occultist2.png"),
  require("../../../assets/image/lore/occultist3.png"),
  require("../../../assets/image/lore/occultist4.png"),
  require("../../../assets/image/lore/occultist5.png"),
  require("../../../assets/image/lore/occultist6.png"),
];
const necromancers = [
  require("../../../assets/image/lore/necromancer1.png"),
  require("../../../assets/image/lore/necromancer2.png"),
  require("../../../assets/image/lore/necromancer3.png"),
  require("../../../assets/image/lore/necromancer4.png"),
  require("../../../assets/image/lore/necromancer5.png"),
  require("../../../assets/image/lore/necromancer6.png"),
];

type ArchetypeGalleryType = {
  archetype: WitchArchetype;
};
export default function ArchetypeGallery({
  archetype,
}: ArchetypeGalleryType): JSX.Element {
  const windowWidth = Dimensions.get("window").width;
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
      {images.map((image, index) => (
        <StyledImageBox
          index={index}
          key={index}
          width={windowWidth}
          source={image}
        />
      ))}
    </StyledContainer>
  );
}
