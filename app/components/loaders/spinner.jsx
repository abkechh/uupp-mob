import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function Spinner({
  size = "large",
  color = "#0066FF",
  fullScreen = false,
  backgroundColor = "rgba(255, 255, 255, 0.8)",
  style,
}) {
  if (fullScreen) {
    return (
      <View style={[styles.fullScreen, { backgroundColor }, style]}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
  },
  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
});
