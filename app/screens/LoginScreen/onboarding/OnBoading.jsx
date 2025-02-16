import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import NameAndPic from "./NameAndPic";
import DOB from "./DOB";
import Email from "./Email";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function OnBoading() {
  const [currentStep, setCurrentStep] = useState(1);
  const onBoardingSteps = [
    {
      title: "Create Profile",
      component: NameAndPic,
    },
    {
      title: "Date of Birth",
      component: DOB,
    },
    {
      title: "Verify Email",
      component: Email,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.stepTitleContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setCurrentStep(currentStep - 1)}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.stepTitle}>
            {onBoardingSteps[currentStep - 1].title}
          </Text>
        </View>
      </View>

      {currentStep === 1 && <NameAndPic />}
      {currentStep === 2 && <DOB />}
      {currentStep === 3 && <Email />}
      {/* //This is to be removed */}
      <Text
        style={styles.skipText}
        onPress={() => setCurrentStep(currentStep + 1)}
      >
        Next
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  stepTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
    paddingVertical: 16,
  },
  backButton: {
    position: "absolute",
    left: 0,
    zIndex: 1,
  },
  titleWrapper: {
    flex: 1,
    alignItems: "center",
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
