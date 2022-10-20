import { MotionSvg } from "@legendapp/motion/svg";
import React, { useState } from "react";
import { View } from "react-native";
import * as RNSvg from "react-native-svg";

import useInterval from "../../services/useInterval";

type LoadingMoonProps = {
  diameter: number;
};
const moonPositions = [20, 20, -20, 60];
export default function LoadingMoon({ diameter }: LoadingMoonProps) {
  const [rotation, setRotation] = useState(-10);
  const [moonCenter, setMoonCenter] = useState(20); // -20, 20, 20, 60
  const [moonState, setMoonState] = useState(0);

  useInterval(() => {
    setRotation(rotation * -1);
  }, 30000);

  useInterval(() => {
    if (moonState === 3) {
      setMoonState(0);
    } else setMoonState(moonState + 1);
    setMoonCenter(moonPositions[moonState]);
  }, 1000);
  return (
    <View style={{ height: diameter, width: diameter }}>
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
              cy={diameter / 2}
              r={diameter / 2 - 1}
              strokeWidth="1"
              fill={"black"}
              animateProps={{
                cx: moonCenter,
              }}
              transition={{
                cx: {
                  duration: moonCenter === 60 ? 10 : 1000,
                  type: "tween",
                },
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
