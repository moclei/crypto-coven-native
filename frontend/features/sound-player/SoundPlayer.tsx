import {
  Inconsolata_400Regular,
  useFonts,
} from "@expo-google-fonts/inconsolata";
import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

import { COLORS } from "../../../util/COLORS";
import PauseSvg from "../../components/icons/PauseIcon";
import PlaySvg from "../../components/icons/PlayIcon";

const accentColor = "#e43200";
const standaloneAccentColor = COLORS.orangeLight;

type StyledSoundPlayerProps = {
  standalone: boolean;
};
const StyledSoundPlayer = styled.View<StyledSoundPlayerProps>`
  align-items: center;
  /*box-sizing: border-box;*/
  color: white;
  display: flex;
  flex-direction: row;
  /*font-family: "Inconsolata", "Times New Roman", sans-serif;*/
  justify-content: space-between;
  padding: 20px 16px;
  width: 100%;
`;

const PlayIcon = styled(PlaySvg)`
  /*fill: white;*/
  height: ${(props) => (props.$standalone ? "20px" : "32px")};
`;
/* playIcon hover (same for playIcon)
*  &:hover {
    fill: ${(props) =>
      props.$standalone ? standaloneAccentColor : accentColor};
  }
*
* */
const PauseIcon = styled(PauseSvg)`
  /*fill: white;*/
  height: ${(props) => (props.$standalone ? "20px" : "32px")};
`;

const PlayPause = styled.TouchableOpacity`
  /*cursor: pointer;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlayerDetails = styled.View`
  width: 100%;
  padding-left: 16px;
`;

const LogoSpan = styled.Text`
  /*display: block;*/
  /*font-family: "gothicus-roman", "Gothicus Roman", "Inconsolata", sans-serif;*/
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 4px;
`;
const Spacer = styled.Text`
  display: none;
`;

export const SoundPlayer = ({
  isPlaying,
  onPlayPauseClick,
  audioControl,
  standalone = false,
}: {
  isPlaying: boolean;
  onPlayPauseClick: () => void;
  audioControl: any;
  standalone?: boolean;
}) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [fontsLoaded] = useFonts({
    Inconsolata_400Regular,
  });

  /*  useEffect(() => {
    console.debug("creating setInterval");
    const interval = setInterval(() => {
      console.debug(
        "setTrackProgress audioControl.positionMillis: ",
        audioControl?.positionMillis || "no audiControl yet"
      );
      setTrackProgress(audioControl?.positionMillis || 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);*/
  useEffect(() => {
    setTrackProgress(audioControl?.positionMillis || 0);
  }, [audioControl]);
  if (!audioControl) return null;
  return (
    <StyledSoundPlayer standalone={standalone}>
      <PlayPause onPress={onPlayPauseClick}>
        {isPlaying ? (
          <PauseIcon $standalone={standalone} />
        ) : (
          <PlayIcon $standalone={standalone} />
        )}
      </PlayPause>
      <PlayerDetails>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            {!standalone && <LogoSpan>crypto coven</LogoSpan>}
            {!standalone && <Spacer> — </Spacer>}
            <Text>The Siren's Song by Jaks</Text>
          </View>
          <Text style={{ textAlign: "right" }}>
            {new Date(trackProgress).toISOString().substr(15, 4)} / 1:04
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 4,
            marginTop: 8,
            width: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: standalone ? standaloneAccentColor : accentColor,
              height: "100%",
              /*transition: "width 1s linear",*/
              width: `${Math.round(
                (trackProgress / (audioControl.durationMillis || 64)) * 100
              )}%`,
            }}
          />
        </View>
      </PlayerDetails>
    </StyledSoundPlayer>
  );
};
