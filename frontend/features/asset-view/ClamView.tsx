import { Audio, AVPlaybackStatus } from "expo-av";
import { Sound } from "expo-av/build/Audio/Sound";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, View } from "react-native";
import styled from "styled-components/native";

import { CovenAsset } from "../../../model/types";
import { SoundPlayer } from "../sound-player/SoundPlayer";

const shell = "https://d3ohv66tlx3ep1.cloudfront.net/shell.png";
// const sirenSongUrl = "https://d3ohv66tlx3ep1.cloudfront.net/siren_song.mp3";

const StyledImageBackground = styled.ImageBackground`
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex: 1;
  padding: 24px;
`;

const StyledShell = styled(Animated.Image)`
  width: 100%;
  height: 360px;
  top: 14%;
`;

interface AssetViewProps {
  data: CovenAsset;
  index: number;
}

let isUnmounting = false;

export default function ClamView({ data, index }: AssetViewProps): JSX.Element {
  const hoverAnimation = useRef(new Animated.ValueXY()).current;
  const [sound] = useState<Sound>(new Audio.Sound());
  const [status, setStatus] = useState<AVPlaybackStatus>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const _onPlaybackStatusUpdate = (playbackStatus) => {
    if (isUnmounting) return;
    if (!playbackStatus.isLoaded) {
      // Update your UI for the unloaded state
      if (playbackStatus.error) {
        console.log(
          `Encountered a fatal error during playback: ${playbackStatus.error}`
        );
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }
    } else {
      // Update your UI for the loaded state
      setStatus(playbackStatus);
      if (playbackStatus.isPlaying) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
      if (playbackStatus.isBuffering) {
        // Update your UI for the buffering state
      }
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        // The player has just finished playing and will stop. Maybe you want to play something else?
      }
    }
  };

  useEffect(() => {
    loadSound().then(() => console.debug("loaded audio"));
    return () => {
      isUnmounting = true;
      sound.unloadAsync().then(() => console.debug("unloaded audio"));
    };
  }, [sound]);

  async function loadSound() {
    console.debug("loadSound");
    sound.setOnPlaybackStatusUpdate(_onPlaybackStatusUpdate);
    console.debug("setOnPlaybackStatusUpdate");
    try {
      await sound.loadAsync(
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("../../../assets/audio/siren_song.mp3")
      );
      // ...
    } catch (error) {
      console.log("Error loading audio, error: ", error);
    }
    console.debug("loadAsync called");
    return () => {
      isUnmounting = true;
      sound.unloadAsync().then(() => console.log("unloaded audio"));
    };
  }

  /*  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);*/
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(hoverAnimation.y, {
          duration: 1500,
          toValue: 15,
          useNativeDriver: true,
        }),
        Animated.timing(hoverAnimation.y, {
          duration: 1500,
          toValue: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [hoverAnimation]);
  const animatedStyles = {
    transform: hoverAnimation.getTranslateTransform(),
  };
  async function onPlayPauseClick() {
    console.log("onPlayPauseClick");
    if (isPlaying) {
      console.log("sound.stopAsync");
      await sound.pauseAsync();
    } else {
      console.log("sound.playAsync");
      sound.playAsync();
    }
  }
  return (
    <StyledImageBackground
      source={require("../../../assets/image/shell_bg_with_glow_scaled_low.png")}
      resizeMode="cover"
      index={index}
    >
      <StyledShell style={animatedStyles} source={{ uri: shell }} />
      <View style={{ bottom: 0, left: 0, position: "absolute", width: "100%" }}>
        {status !== null && (
          <SoundPlayer
            isPlaying={isPlaying}
            onPlayPauseClick={onPlayPauseClick}
            audioControl={status}
          />
        )}
      </View>
    </StyledImageBackground>
  );
}
