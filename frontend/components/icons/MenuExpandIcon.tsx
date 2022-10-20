import React from "react";
import * as RNSvg from "react-native-svg";

type IconProps = {
  color?: string;
};
export default function MenuExpandIcon({ color = "black" }: IconProps) {
  return (
    <RNSvg.Svg viewBox="0 0 14 14" stroke={color} width={14} height={14}>
      <RNSvg.Path d="M 3.5 5.75 L 7 9.25 l 3.5 -3.5" />
    </RNSvg.Svg>
  );
}
