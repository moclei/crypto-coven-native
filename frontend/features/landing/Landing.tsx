import { Motion } from "@legendapp/motion";
import { MotionSvg } from "@legendapp/motion/svg";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, View } from "react-native";
import {
  Keyframe,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Defs, EMaskUnits, Mask, Rect } from "react-native-svg";
import styled from "styled-components/native";

import LoadingMoon from "../../components/loading/LoadingMoon";
import MainTitle from "../../components/main-title/MainTitle";
import useInterval from "../../services/useInterval";

const StyledApp = styled.View`
  width: 100%;
  height: 100%;
  background: #eeeeee;
`;

/*
  animation-name: "moon-loader-rotation";
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
 */
const StyleContainer = styled.View<{ diameter: number }>`
  transform-origin: center center;
  width: ${(props) => props.diameter + "px"};
  height: ${(props) => props.diameter + "px"};
`;

// eslint-disable-next-line functional/no-class
class MoonContainer extends React.Component<any, any> {
  render() {
    return (
      <Svg height="40" width="40" viewBox="0 0 100 100">
        <Rect width={"100%"} height={"100%"} fill={"white"} />
        <Circle
          cx={50}
          cy={50}
          r={50}
          stroke={"purple"}
          strokeWidth={0.5}
          fill={"black"}
        />
      </Svg>
    );
  }
}

export default function Landing(): JSX.Element {
  return (
    <StyledApp>
      <MainTitle />
    </StyledApp>
  );
}
