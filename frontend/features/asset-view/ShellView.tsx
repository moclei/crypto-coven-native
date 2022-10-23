import { Audio, AVPlaybackStatus } from "expo-av";
import { Sound } from "expo-av/build/Audio/Sound";
import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

import { SoundPlayer } from "../sound-player/SoundPlayer";

const shell = "https://d3ohv66tlx3ep1.cloudfront.net/shell.png";

const StyledImageBackground = styled.ImageBackground`
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex: 1;
`;

const StyledShell = styled(Animated.Image)`
  width: 100%;
  height: 360px;
  top: 14%;
`;

const StyledPlayContainer = styled.View`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  padding: 12px;
  display: flex;
`;

interface AssetViewProps {
  index: number;
}

export default function ShellView({ index }: AssetViewProps): JSX.Element {
  const hoverAnimation = useRef(new Animated.ValueXY()).current;
  const [sound] = useState<Sound>(new Audio.Sound());
  const [status, setStatus] = useState<AVPlaybackStatus>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const _onPlaybackStatusUpdate = (playbackStatus) => {
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
      sound.unloadAsync().then(() => console.debug("unloaded audio"));
    };
  }, [sound]);

  async function loadSound() {
    sound.setOnPlaybackStatusUpdate(_onPlaybackStatusUpdate);
    try {
      await sound.loadAsync(
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("../../../assets/audio/siren_song.mp3")
      );
      // ...
    } catch (error) {
      console.log("Error loading audio, error: ", error);
    }
    return () => {
      /*isUnmounting = true;*/
      sound.unloadAsync().then(() => console.log("unloaded audio"));
    };
  }

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
      source={require("../../../assets/images/shell_bg_with_glow_scaled_low.png")}
      resizeMode="cover"
      index={index}
    >
      <StyledShell style={animatedStyles} source={{ uri: shell }} />
      <StyledPlayContainer>
        {status !== null && (
          <SoundPlayer
            isPlaying={isPlaying}
            onPlayPauseClick={onPlayPauseClick}
            audioControl={status}
          />
        )}
      </StyledPlayContainer>
    </StyledImageBackground>
  );
}
