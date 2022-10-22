import MaskedView from "@react-native-masked-view/masked-view";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
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
export default function MaskedLandingMoon({
  diameter,
  height,
}: LoadingMoonProps) {
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
      backgroundColor: "transparent",
      borderRadius: diameter / 4,
      height: diameter / 2 - 1,
      left: diameter / 4,
      position: "absolute",
      width: diameter / 2 - 1,
    },
  };

  return (
    <MaskedView
      style={{
        flex: 1,
        flexDirection: "row",
        height: "100%",
      }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: "transparent",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Hello</Text>
        </View>
      }
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgb(224, 175, 132)",
          borderRadius: diameter / 4,
          height: "100%",
          width: diameter / 2,
        }}
      />
      {/* <Animated.View style={[styles.box, animatedStyles]} />*/}
    </MaskedView>
  );
}

/*
<MaskedView
      style={{ flex: 1, flexDirection: 'row', height: '100%' }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Basic Mask
          </Text>
        </View>
      }
    >
    <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
    <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
    <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
    <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
    </MaskedView>
 */

/*  ANIMATION  <View
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
    </View>*/
