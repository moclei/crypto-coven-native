import React from "react";
import Svg, { Path } from "react-native-svg";

export default function PauseIcon() {
  return (
    <Svg viewBox="0 0 22 30" fill="white" width={25} height={25}>
      <Path d="M0 3.08642C0 1.38184 1.43165 0 3.19767 0C4.9637 0 6.39535 1.38184 6.39535 3.08642V26.9136C6.39535 28.6182 4.9637 30 3.19767 30C1.43165 30 0 28.6182 0 26.9136V3.08642Z" />
      <Path d="M15.6047 3.08642C15.6047 1.38184 17.0363 0 18.8023 0C20.5684 0 22 1.38184 22 3.08642V26.9136C22 28.6182 20.5684 30 18.8023 30C17.0363 30 15.6047 28.6182 15.6047 26.9136V3.08642Z" />
    </Svg>
  );
}