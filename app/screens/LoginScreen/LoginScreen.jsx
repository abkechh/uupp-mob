import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import CompanyLogo from "@/app/components/Logo/CompanyLogo";
import OnBoardingButton from "@/app/components/Buttons/OnBoardingButton";
import PhoneNumberInput from "@/app/components/Inputs/PhoneNumberInput";
import { colors, spacing, typography } from "@/app/theme";
import termsContent from "./TermsAndConditionScreens/termsContent";
import privacyContent from "./TermsAndConditionScreens/privacyContent";
const { width, height } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <CompanyLogo />
        </View>
        <View style={styles.inputContainer}>
          <PhoneNumberInput />
          <View style={styles.buttonContainer}>
            <OnBoardingButton
              title="Continue with Phone"
              onPress={() => navigation.navigate("Home")}
              buttonStyle={{
                backgroundColor: colors.primary,
                paddingVertical: spacing.large,
                borderRadius: 8,
              }}
            >
              <Text style={styles.buttonText}>Continue with Phone</Text>
            </OnBoardingButton>
          </View>
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or Continue With</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.socialContainer}>
          <OnBoardingButton
            title="Google"
            onPress={() => {}}
            buttonStyle={{
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.lightGray,
              paddingVertical: spacing.large,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: spacing.medium,
              borderRadius: 8,
            }}
          >
            <Image
              source={require("@/assets/images/google48.png")}
              style={styles.socialIcon}
            />
            <Text>Continue with Google</Text>
          </OnBoardingButton>
          <OnBoardingButton
            title="Apple"
            onPress={() => {}}
            buttonStyle={{
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.lightGray,
              paddingVertical: spacing.large,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: spacing.medium,
              borderRadius: 8,
            }}
          >
            <Image
              source={require("@/assets/images/facebook50.png")}
              style={styles.socialIcon}
            />
            <Text>Continue with Facebook</Text>
          </OnBoardingButton>
        </View>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>By continuing, you agree to our </Text>
        <View style={styles.termsLinksContainer}>
          <Text
            style={styles.termsLink}
            onPress={() =>
              navigation.navigate("ContentScreen", {
                title: "Terms & Conditions",
                content: termsContent, // Pass terms content
              })
            }
          >
            Terms of Service
          </Text>
          <Text
            style={styles.termsLink}
            onPress={() =>
              navigation.navigate("ContentScreen", {
                title: "Privacy Policy",
                content: privacyContent, // Pass privacy content
              })
            }
          >
            Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-between",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.xLarge,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.xLarge,
  },
  buttonContainer: {
    marginTop: spacing.medium,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.medium,
    width: width * 0.85,
    alignSelf: "center",
    marginTop: 2 * spacing.large,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightGray,
  },
  dividerText: {
    marginHorizontal: spacing.medium,
    color: colors.secondary,
  },
  socialContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.medium,
  },
  socialButton: {
    flexDirection: "row",
    marginHorizontal: spacing.medium,
    marginTop: spacing.medium,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: spacing.small,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.fontSizes.medium,
    fontWeight: typography.fontWeights.medium,
  },
  termsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xLarge,
  },
  termsText: {
    fontSize: typography.fontSizes.medium,
    color: colors.secondary,
  },
  termsLinksContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: spacing.tiny,
  },
  termsLink: {
    color: colors.primary,
    fontSize: typography.fontSizes.medium,
    marginHorizontal: spacing.medium,
  },
});
