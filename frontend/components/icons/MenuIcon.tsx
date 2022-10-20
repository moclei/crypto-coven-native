import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function MenuIcon() {
  return (
    <View>
      <Feather name="menu" size={32} color="green" />
    </View>
  );
}
