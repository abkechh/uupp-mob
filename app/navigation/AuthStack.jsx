import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import OnBoading from "../screens/LoginScreen/onboarding/OnBoading";
import TermsAndConditionScreen from "../screens/LoginScreen/TermsAndConditionScreens/TermsAndConditionScreen";
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={OnBoading} />
      <Stack.Screen
        name="ContentScreen"
        component={TermsAndConditionScreen}
        options={({ route }) => ({
          title: route.params.title,
          presentation: "modal",
          animation: "slide_from_bottom",
          animationDuration: 300,
          cardStyleInterpolator: ({ current, layouts }) => ({
            cardStyle: {
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.height, 0],
                  }),
                },
              ],
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            },
          }),
        })}
      />
    </Stack.Navigator>
  );
}
