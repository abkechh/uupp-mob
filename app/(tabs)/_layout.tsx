import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./index";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import AppNavigator from "../navigation/AppNavigator";
const Stack = createNativeStackNavigator();
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return <AppNavigator />;
}
