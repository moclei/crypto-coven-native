import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

type LoadingMoonProps = {
  diameter: number;
  height: number;
};
export default function NewLandingMoon({ diameter, height }: LoadingMoonProps) {
  const offset = useSharedValue(-diameter / 2);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
        {
          translateY: offset.value / 10,
        },
      ],
    };
  });

  useEffect(() => {
    offset.value = withRepeat(
      withSequence(
        withTiming(-31, {
          duration: 300,
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        withTiming(0, {
          duration: 1500,
          easing: Easing.bezier(0.25, 1, 0.5, 1),
        }),
        withTiming(31, {
          duration: 1400,
          easing: Easing.bezier(0.87, 0, 0.13, 1),
        })
      ),
      0,
      false
    );
  }, [offset]);

  const styles = {
    box: {
      backgroundColor: "black",
      borderRadius: diameter / 4,
      height: diameter / 2 - 1,
      left: diameter / 4,
      position: "absolute",
      width: diameter / 2 - 1,
    },
  };

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "transparent",
        display: "flex",
        height: height,
        justifyContent: "center",
        width: diameter,
      }}
    >
      <View
        style={{
          backgroundColor: "rgb(224, 175, 132)",
          borderRadius: diameter / 4,
          height: diameter / 2,
          position: "absolute",
          width: diameter / 2,
        }}
      />
      <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  );
}
