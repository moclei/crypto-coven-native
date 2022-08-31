import React from "react";
import styled from "styled-components/native";

import { WitchArchetype } from "../../../model/types";
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

const StyledHorizontalLine = styled.View`
  height: 1px;
  background-color: lightgray;
  width: 90%;
  margin: 24px 0;
`;

const StyledCenterView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledStartView = styled.View`
  display: flex;
  align-items: flex-start;
`;

export default function LoreScreen({ navigation }): JSX.Element {
  return (
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
              crumbled to dust, and wonder seeped from the cracks in our skin...
              there were WITCHES who wove the threads of all things, carefully
              adjusting each string to tune.
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
              WITCHES own the Milky Way. They’re smart with the property market
              like that. They hold little rocks in the plushness of their hands
              and haggle them down to get a good deal. They are collectors,
              curators, equal admirers of rubies and refuse.
            </Body2>
            <Body2 style={{ marginBottom: 24 }}>
              WITCHCRAFT is about intuition. About listening to the quiet, about
              the freedom to choose and go where one wishes, about maintaining
              the balance of things.
            </Body2>
            <Body2 style={{ marginBottom: 24 }}>
              A WITCH does not grow in ways you expect; they only grow stranger.
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
            <Header3 color={"white"}>Enchantress</Header3>
            <Body2 style={{ marginBottom: 24 }}>
              An ENCHANTRESS is a being of glamour. Your hand may pass through
              the waves of their hair, the weight of their cloak, the wonders of
              their lips. They are simultaneously here, there, anywhere, with
              power to grasp and feeble minds to conquer. You must move out of
              an ENCHANTRESS’s way when they walk. You see reality shimmer in
              and out of being with each click of their heel. They cast you into
              love so deep with a wave of their arm you do not care they have
              demolished your city to clear the western view from their tower.
            </Body2>
            <Body2 style={{ marginBottom: 24 }}>
              An ENCHANTRESS beguiles your paramour, charms your enemy, counsels
              your king. When they wink and their mask slips to reveal the
              hungry grin beneath, you must have the sense to take it to your
              grave.
            </Body2>
            <ArchetypeGallery archetype={WitchArchetype.ENCHANTRESS} />
          </StyledStartView>
        </StyledContent>
      </StyledImageBackground>
    </StyledContainer>
  );
}
