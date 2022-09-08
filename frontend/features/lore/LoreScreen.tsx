import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import OutsideView from "react-native-detect-press-outside";
import styled, { css } from "styled-components/native";

import { WitchArchetype } from "../../../model/types";
import Dropdown from "../../components/dropdown/Dropdown";
import ArchetypeGallery from "../../components/galleries/ArchetypeGallery";
import Body2 from "../../components/typography/Body2";
import Header2 from "../../components/typography/Header2";
import Header3 from "../../components/typography/Header3";

const StyledContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2a2d31;
`;

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  padding-top: 24px;
`;

const StyledContent = styled.ScrollView`
  display: flex;
  padding: 0 24px;
`;

const StyledButton = styled.TouchableOpacity`
  display: flex;
  padding: 0 24px;
  border-radius: 8px;
  border-color: white;
  border-width: 1px;
  width: 260px;
  margin: 4px 0;
  display: flex;
  align-items: center;
`;

const StyledHorizontalLine = styled.View`
  height: 1px;
  background-color: lightgray;
  width: 90%;
  margin: 24px 24px;
`;

const StyledCenterView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
`;

type StyledStartViewProps = {
  open?: boolean;
};
const StyledStartView = styled.View<StyledStartViewProps>`
  display: flex;
  align-items: flex-start;
`;

const CollapseView = styled.View<StyledStartViewProps>`
  display: flex;
  align-items: flex-start;
  ${(props) =>
    !props.open &&
    css`
      height: 0;
    `}
`;

export default function LoreScreen({ navigation }): JSX.Element {
  const childRef = useRef();
  const witchesArr = Object.values(WitchArchetype).map((w) => {
    return {
      containerStyle: {
        backgroundColor: "#000",
      },
      label: w.charAt(0).toUpperCase() + w.substr(1, w.length - 1),
      labelStyle: {
        color: "#fff",
      },
      value: w,
    };
  });

  const handlePressOutside = () => {
    if (childRef && childRef.current) {
      // @ts-ignore
      childRef.current.onOutsidePress();
    }
  };

  return (
    <OutsideView childRef={childRef} onPressOutside={handlePressOutside}>
      <StyledContainer>
        <StyledImageBackground
          source={require("../../../assets/image/website-full.png")}
          resizeMode="cover"
        >
          <StyledContent>
            <StyledCenterView>
              <Header2 color={"white"}>Lore</Header2>
              <Body2 style={{ textAlign: "center" }}>
                Before the dead were put to rest, before the wizard kings were
                cast off thrones of pale bone... before their unassailable walls
                crumbled to dust, and wonder seeped from the cracks in our
                skin... there were WITCHES who wove the threads of all things,
                carefully adjusting each string to tune.
              </Body2>
            </StyledCenterView>
            <StyledHorizontalLine />
            <StyledStartView>
              <Body2 style={{ marginBottom: 24 }}>
                WITCHES live in the in-between. In the space between eyelids, in
                the spines of books. WITCHES build treasures with toadstools,
                turmeric bricks, turpentine, twine. They brush their hair with
                henna for luster and blood for shine.
              </Body2>
              <Body2 style={{ marginBottom: 24 }}>
                WITCHES own the Milky Way. They’re smart with the property
                market like that. They hold little rocks in the plushness of
                their hands and haggle them down to get a good deal. They are
                collectors, curators, equal admirers of rubies and refuse.
              </Body2>
              <Body2 style={{ marginBottom: 24 }}>
                WITCHCRAFT is about intuition. About listening to the quiet,
                about the freedom to choose and go where one wishes, about
                maintaining the balance of things.
              </Body2>
              <Body2 style={{ marginBottom: 24 }}>
                A WITCH does not grow in ways you expect; they only grow
                stranger.
              </Body2>
              <Body2 style={{ marginBottom: 24 }}>
                While no one may own a WITCH, anyone can become one. And when
                you’re a WITCH, you cannot be bound — may you be naked in your
                rites until the last of your oppressors are dead.
              </Body2>
            </StyledStartView>
            <StyledHorizontalLine />
            <StyledStartView>
              <Header2 color={"white"}>Archetypes of Power</Header2>
            </StyledStartView>
            <StyledCenterView>
              <StyledButton
                onPress={() =>
                  navigation.navigate("ArchetypeView", {
                    archetype: WitchArchetype.ENCHANTRESS,
                  })
                }
              >
                <Header3 color={"white"}>Enchantress</Header3>
              </StyledButton>
              <StyledButton
                onPress={() =>
                  navigation.navigate("ArchetypeView", {
                    archetype: WitchArchetype.MAGE,
                  })
                }
              >
                <Header3 color={"white"}>Mage</Header3>
              </StyledButton>
              <StyledButton
                onPress={() =>
                  navigation.navigate("ArchetypeView", {
                    archetype: WitchArchetype.SEER,
                  })
                }
              >
                <Header3 color={"white"}>Seer</Header3>
              </StyledButton>
              <StyledButton
                onPress={() =>
                  navigation.navigate("ArchetypeView", {
                    archetype: WitchArchetype.OCCULTIST,
                  })
                }
              >
                <Header3 color={"white"}>Occultist</Header3>
              </StyledButton>
              <StyledButton
                onPress={() =>
                  navigation.navigate("ArchetypeView", {
                    archetype: WitchArchetype.NECROMANCER,
                  })
                }
              >
                <Header3 color={"white"}>Necromancer</Header3>
              </StyledButton>
              <StyledButton
                onPress={() =>
                  navigation.navigate("ArchetypeView", {
                    archetype: WitchArchetype.HAG,
                  })
                }
              >
                <Header3 color={"white"}>Hag</Header3>
              </StyledButton>
            </StyledCenterView>
          </StyledContent>
        </StyledImageBackground>
      </StyledContainer>
    </OutsideView>
  );
}
