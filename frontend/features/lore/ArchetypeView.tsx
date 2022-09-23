import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { CovenAsset, WitchArchetype } from "../../../model/types";
import { RootStackParamList } from "../../App";
import ArchetypeGallery from "../../components/galleries/ArchetypeGallery";
import Body2 from "../../components/typography/Body2";

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

interface ArchetypeViewProps {
  data: CovenAsset;
  index: number;
}

const ENCHANTRESS_DESC = (
  <View>
    <Body2 style={{ marginBottom: 24 }}>
      An ENCHANTRESS is a being of glamour. Your hand may pass through the waves
      of their hair, the weight of their cloak, the wonders of their lips. They
      are simultaneously here, there, anywhere, with power to grasp and feeble
      minds to conquer. You must move out of an ENCHANTRESS’s way when they
      walk. You see reality shimmer in and out of being with each click of their
      heel. They cast you into love so deep with a wave of their arm you do not
      care they have demolished your city to clear the western view from their
      tower.
    </Body2>
    <Body2 style={{ marginBottom: 24 }}>
      An ENCHANTRESS beguiles your paramour, charms your enemy, counsels your
      king. When they wink and their mask slips to reveal the hungry grin
      beneath, you must have the sense to take it to your grave.
    </Body2>
  </View>
);

const SEER_DESC = (
  <View>
    <Body2 style={{ marginBottom: 24 }}>
      You don’t interrupt a SEER when they’re talking. They may talk for minutes
      or hours or terrible, terrible years, but you must not shimmy, shift, or
      breathe. You must inhale prophecy, exhale truth. You must moisten their
      throat with some lemon water, bug’s breath, slime from the spine of a
      toad.
    </Body2>
    <Body2 style={{ marginBottom: 24 }}>
      A SEER knows both the things you want and want to avoid. They’re sensible
      enough to charge a premium to not involve the latter.
    </Body2>
  </View>
);

const OCCULTIST_DESC = (
  <View>
    <Body2 style={{ marginBottom: 24 }}>
      When you cross an OCCULTIST, you must grip tight to your soul. They are
      flame dancers, altar tenders, arbiters of demon deals. They hunt in packs,
      howl like beasts, wander the darkest depths of the forest with eyes that
      blaze with frenzy you cannot tame. They speak in hidden tongues, serve
      weird and terrible masters. Never share your name. Never share your
      destination. Never back out of a deal, once decided.
    </Body2>
    <Body2 style={{ marginBottom: 24 }}>
      If you betray an OCCULTIST, you are already dead. Whether in this lifetime
      or the next, you will not wake in your bed. Pray to whatever god you
      worship. Hope they can hear.
    </Body2>
  </View>
);

const NECROMANCER_DESC = (
  <View>
    <Body2 style={{ marginBottom: 24 }}>
      If you ask a NECROMANCER a favor, they will grant it only once. You must
      meet them in a moon-soaked cemetery, a field of cypress, your own parlor
      beneath a veil of organza and elderflower leaves. You must watch as herbs
      are ground and combined, must turn away as the potion, once gargled, lends
      their voice to the muted tones of your father, your daughter, your love
      made wretched by time or drought or disease.
    </Body2>
    <Body2 style={{ marginBottom: 24 }}>
      A NECROMANCER walks where other WITCHES cannot. They wet the hem of their
      cloak on the frigid waters of death. You must show respect to their
      austerity. You must give what they are owed. You must hope that the
      NECROMANCER who comes across your spirit would rather be your guide than
      your master.
    </Body2>
  </View>
);

const HAG_DESC = (
  <View>
    <Body2 style={{ marginBottom: 24 }}>
      HAGS can only be stumbled upon. They exist at the fringes of things —
      tucked into tree knots, hollow logs, or mushroom rings. You find a HAG by
      following a trail of crumbs, the whistled notes of a working song, the
      smell of berries sweetening to jam. You must always ask permission to
      enter their cottage. You must turn away forever if denied.
    </Body2>
    <Body2 style={{ marginBottom: 24 }}>
      In a HAG’s company you will eat well from the earth. You will find
      firelight to warm you and thread to mend your clothes. You must gift
      something of value for all that you receive. A HAG will claim a memory, a
      well-loved sock, a chapter of your favorite book. Do not overstay your
      welcome lest you give more than you can lose.
    </Body2>
  </View>
);

const MAGE_DESC = (
  <View>
    <Body2 style={{ marginBottom: 24 }}>
      You approach a MAGE when questions are more important than answers. When
      you have opened your mind to the arcane, when you see magic as something
      to be deconstructed, analyzed and understood. A MAGE is a master of order,
      of examination. They pick the world apart molecule by molecule, hair by
      hair. MAGES calculate consequence. They calculate the weight of things.
      They calculate how fast they can break you to pieces and put you back
      together.
    </Body2>
    <Body2 style={{ marginBottom: 24 }}>
      When you gift a MAGE a query, you must be prepared to accept their
      response in all of its great and terrible density. You must bear the
      weight of their will, the stasis of their study. What is built from layers
      of parchment, texts, and sigils holds the wisdom of the world.
    </Body2>
  </View>
);

export default function ArchetypeView({
  data,
  index,
}: ArchetypeViewProps): JSX.Element {
  const route = useRoute<RouteProp<RootStackParamList, "ArchetypeView">>();
  const archetype = useMemo(() => {
    return route.params.archetype;
  }, [route]);

  const getArchetypeDesc = (archetype: WitchArchetype) => {
    switch (archetype) {
      case WitchArchetype.ENCHANTRESS:
        return ENCHANTRESS_DESC;
      case WitchArchetype.SEER:
        return SEER_DESC;
      case WitchArchetype.HAG:
        return HAG_DESC;
      case WitchArchetype.MAGE:
        return MAGE_DESC;
      case WitchArchetype.NECROMANCER:
        return NECROMANCER_DESC;
      case WitchArchetype.OCCULTIST:
        return OCCULTIST_DESC;
      default:
        return ENCHANTRESS_DESC;
    }
  };
  return (
    <StyledImageBackground
      source={require("../../../assets/image/website-full.png")}
      resizeMode="cover"
      index={index}
    >
      <StyledScrollView>
        {getArchetypeDesc(archetype)}
        <ArchetypeGallery archetype={archetype} />
      </StyledScrollView>
      {/*<StatusBar
        backgroundColor="transparent"
        style={"light"}
        translucent={true}
      />*/}
    </StyledImageBackground>
  );
}
