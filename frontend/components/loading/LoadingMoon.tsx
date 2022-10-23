import { MotionSvg } from "@legendapp/motion/svg";
import React, { useState } from "react";
import { Easing, View } from "react-native";
import * as RNSvg from "react-native-svg";

import useInterval from "../../services/useInterval";

type LoadingMoonProps = {
  diameter: number;
  height: number;
};
const moonPositions = [-30, 30, 30, 90];
export default function LoadingMoon({ diameter, height }: LoadingMoonProps) {
  const [rotation, setRotation] = useState(-10);
  const [moonCenter, setMoonCenter] = useState(-30); // -20, 20, 20, 60
  const [moonState, setMoonState] = useState(0);

  useInterval(() => {
    setRotation(rotation * -1);
  }, 30000);

  useInterval(
    () => {
      if (moonState === 3) {
        setMoonState(0);
      } else setMoonState(moonState + 1);
      setMoonCenter(moonPositions[moonState]);
    },
    moonState === 1 || moonState === 2 ? 500 : 1000
  );
  return (
    <View
      style={{
        height: height,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MotionSvg.Svg height={diameter} width={diameter}>
        <RNSvg.Defs>
          <RNSvg.Mask id="Mask">
            <MotionSvg.Rect
              stroke="#555"
              width={"100%"}
              height={"100%"}
              strokeWidth="0"
              fill={"white"}
            />
            <MotionSvg.Circle
              stroke="black"
              r={diameter / 2 - 2}
              strokeWidth="1"
              fill={"black"}
              animateProps={{
                cx: moonCenter,
                cy: diameter / 2 - 4 + moonCenter / 8,
              }}
              transition={{
                duration: moonCenter === -30 ? 10 : 1000,
                type: "timing",
                easing: Easing.easing,
              }}
            />
          </RNSvg.Mask>
        </RNSvg.Defs>
        <MotionSvg.Circle
          id={"donut"}
          r={diameter / 2}
          cx={diameter / 2}
          cy={diameter / 2}
          fill={"rgb(224, 175, 132)"}
          mask={`url(#Mask)`}
        />
      </MotionSvg.Svg>
    </View>
  );
}
