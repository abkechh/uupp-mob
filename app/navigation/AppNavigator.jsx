import React from "react";
import { View } from "react-native";
import AuthStack from "./AuthStack";
import MainTab from "./MainTab";

export default function AppNavigator() {
  const isLoggedIn = false;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isLoggedIn ? <MainTab /> : <AuthStack />}
    </View>
  );
}
