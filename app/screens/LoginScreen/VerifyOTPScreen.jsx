import { Text, View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import OTPInput from "@/app/components/Inputs/OTPInput";
import OnBoardingButton from "@/app/components/Buttons/OnBoardingButton";
const { width, height } = Dimensions.get("window");

export default function VerifyOTPScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Enter Verification Code</Text>
        <Text style={styles.subtitle}>We've sent a verification code to your phone number</Text>
        <Text style={styles.destinationText}>+91-95*******80</Text>      
      </View>
      <View style={styles.otpInputContainer}>
        <OTPInput otpSize={6} onOtpComplete={undefined}/>
      </View>
      <View style={styles.buttonContainer}>
        <OnBoardingButton title="Verify" onPress={undefined} buttonStyle={undefined} textStyle={undefined}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  contentContainer: {
    width: width * 0.85,
    alignItems: "center",
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginTop: height * 0.05,
  },
  subtitle: {
    fontSize: width * 0.04,
    fontWeight: "normal",
    marginTop: height * 0.01,
  },
  destinationText: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginTop: height * 0.01,
    color: "#2563EB",
  },
  otpInputContainer: {
    marginTop: height * 0.05,
  },
  buttonContainer: {
    marginTop: height * 0.05,
  },
});
