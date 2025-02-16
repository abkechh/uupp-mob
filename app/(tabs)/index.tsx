import { Image, StyleSheet, Platform, View, SafeAreaView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import OnBoardingButton from "@/app/components/Buttons/OnBoardingButton";
import CompanyLogo from "@/app/components/Logo/CompanyLogo";
import PhoneNumberInput from "@/app/components/Inputs/PhoneNumberInput";
import CompanyStampWithIcon from "@/app/components/Stamp/CompanyStampWithIcon";
import { Text, TouchableOpacity, Dimensions } from "react-native";
import LoginScreen from "@/app/screens/LoginScreen/LoginScreen";
import VerifyOTPScreen from "@/app/screens/LoginScreen/VerifyOTPScreen";
import OnBoading from "@/app/screens/LoginScreen/onboarding/OnBoading";
const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    // <VerifyOTPScreen />
    // <LoginScreen />
    <OnBoading />
  );
}
