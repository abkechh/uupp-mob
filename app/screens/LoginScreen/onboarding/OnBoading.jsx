import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import NameAndPic from "./NameAndPic";
import OnBoardingButton from "@/app/components/Buttons/OnBoardingButton";
import DOB from "./DOB";
import Email from "./Email";
import Icon from "react-native-vector-icons/MaterialIcons";
import { typography, spacing } from "@/app/theme";
export default function OnBoading({ navigation, route }) {
  const { username, password } = route.params;
  const [currentStep, setCurrentStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  //Profile pic is to be
  const onBoardingSteps = [
    {
      title: "Create Profile",
      component: NameAndPic,
      props: { firstName, setFirstName, lastName, setLastName },
    },
    {
      title: "Date of Birth",
      component: DOB,
      props: { dob, setDob },
    },
    {
      title: "Verify Email",
      component: Email,
      props: { email, setEmail },
    },
  ];

  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("dob", dob);
  console.log("email", email);

  const CurrentComponent = onBoardingSteps[currentStep - 1].component;
  const currentProps = onBoardingSteps[currentStep - 1].props;

  return (
    <View style={styles.container}>
      <View style={styles.stepTitleContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (currentStep > 1) setCurrentStep(currentStep - 1);
            else navigation.goBack();
          }}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.stepTitle}>
            {onBoardingSteps[currentStep - 1].title}
          </Text>
        </View>
      </View>

      <CurrentComponent {...currentProps} />

      <OnBoardingButton
        onPress={() => {
          if (currentStep < onBoardingSteps.length) {
            setCurrentStep(currentStep + 1);
          }
          console.log("currentStep", currentStep);
          console.log("firstName", firstName);
          console.log("lastName", lastName);
          console.log("dob", dob);
          console.log("email", email);
        }}
        buttonStyle={styles.onBoardingButton}
      >
        <Text style={styles.nextText}>Next</Text>
      </OnBoardingButton>
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
  onBoardingButton: {
    marginTop: spacing.xLarge,
  },
  nextText: {
    color: "white",
    fontSize: typography.fontSizes.medium,
    fontWeight: typography.fontWeights.bold,
  },
});
