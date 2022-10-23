import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Body2 from "../../components/typography/Body2";
import Header2 from "../../components/typography/Header2";
import Header3 from "../../components/typography/Header3";

const StyledContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2a2d31;
`;

const StyledScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

const StyledImageBackground = styled.ImageBackground`
  height: 280px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.Image`
  background-color: rgb(30, 33, 37);
  border: 4px solid rgb(255, 255, 255);
  border-radius: 100px;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

const CreatorContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;
`;
export default function Creators(): JSX.Element {
  return (
    <StyledContainer>
      <StyledScrollView
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#2a2d31",
        }}
      >
        <StyledImageBackground
          source={require("../../../assets/images/eyes_full.png")}
          resizeMode="contain"
        >
          <View style={{ paddingTop: 48, backgroundColor: "#2a2d31" }}>
            <Header2 color={"white"} style={{ fontSize: 58 }}>
              Creators
            </Header2>
          </View>
        </StyledImageBackground>

        <CreatorContainer style={{ marginTop: -120 }}>
          <Thumbnail
            source={require("../../../assets/images/nyx_thumbnail.png")}
            resizeMode="contain"
          />
          <Header3 style={{ fontSize: 48 }} color={"white"}>
            Nyx
          </Header3>
          <Body2 style={{ paddingTop: 8 }}>conjuror of visions</Body2>
          <Body2
            style={{ paddingBottom: 48, paddingTop: 8, textAlign: "center" }}
          >
            art, lore, code, concepts to fruition
          </Body2>
        </CreatorContainer>

        <CreatorContainer>
          <Thumbnail
            source={require("../../../assets/images/aletheia_thumbnail.png")}
            resizeMode="contain"
          />
          <Header3 style={{ fontSize: 48 }} color={"white"}>
            Aletheia
          </Header3>
          <Body2 style={{ paddingTop: 8 }}>aesthetic artificer</Body2>
          <Body2
            style={{ paddingBottom: 48, paddingTop: 8, textAlign: "center" }}
          >
            art, visual development, interpretation of emotions
          </Body2>
        </CreatorContainer>

        <CreatorContainer>
          <Thumbnail
            source={require("../../../assets/images/xuannu_thumbnail.png")}
            resizeMode="contain"
          />
          <Header3 style={{ fontSize: 48 }} color={"white"}>
            Xuannü
          </Header3>
          <Body2 style={{ paddingTop: 8 }}>keeper of the coven</Body2>
          <Body2
            style={{ paddingBottom: 48, paddingTop: 8, textAlign: "center" }}
          >
            culturecraft, code, project stitchwork
          </Body2>
        </CreatorContainer>

        <CreatorContainer>
          <Thumbnail
            source={require("../../../assets/images/aradia_thumbnail.png")}
            resizeMode="contain"
          />
          <Header3 style={{ fontSize: 48 }} color={"white"}>
            Aradia
          </Header3>
          <Body2 style={{ paddingTop: 8 }}>weaver of webs</Body2>
          <Body2
            style={{ paddingBottom: 48, paddingTop: 8, textAlign: "center" }}
          >
            sound direction, names, code
          </Body2>
        </CreatorContainer>

        <CreatorContainer style={{ paddingBottom: 148 }}>
          <Thumbnail
            source={require("../../../assets/images/keridwen_thumbnail.png")}
            resizeMode="contain"
          />
          <Header3 style={{ fontSize: 48 }} color={"white"}>
            Keridwen
          </Header3>
          <Body2 style={{ paddingTop: 8 }}>witch articulator</Body2>
          <Body2
            style={{ paddingBottom: 48, paddingTop: 8, textAlign: "center" }}
          >
            wordsmithery, lore, wise cracks
          </Body2>
        </CreatorContainer>
      </StyledScrollView>
    </StyledContainer>
  );
}
