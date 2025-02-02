import { Text, View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import CompanyLogo from "@/app/components/Logo/CompanyLogo";
import OnBoardingButton from "@/app/components/Buttons/OnBoardingButton";
import PhoneNumberInput from "@/app/components/Inputs/PhoneNumberInput";
const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.companyLogoContainer}>
          <CompanyLogo size={64} borderRadius={10} />
        </View>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}>Create Account</Text>
          <Text style={styles.pageSubtitle}>Join us! Create your account</Text>
        </View>
        <View style={styles.phoneNumberInputContainer}>
          <PhoneNumberInput
            value={undefined}
            onChangeText={undefined}
            error={undefined}
          />
        </View>
        <View style={styles.buttonContainer}>
          <OnBoardingButton
            title="Create Account"
            onPress={() => {}}
            buttonStyle={undefined}
            textStyle={undefined}
          />
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.socialMediaContainer}>
          <View style={styles.socialMediaButtonContainer}>
            <OnBoardingButton
              title="Continue with Google"
              onPress={() => {}}
              buttonStyle={{
                backgroundColor: "#fff",
                borderColor: "#E5E7EB",
                borderWidth: 1,
              }}
              textStyle={{
                color: "#000",
              }}
            />
          </View>
          <View style={styles.socialMediaButtonContainer}>
            <OnBoardingButton
              title="Continue with Apple"
              onPress={() => {}}
              buttonStyle={{
                backgroundColor: "#000",
                borderColor: "#E5E7EB",
                borderWidth: 1,
              }}
              textStyle={{
                color: "#fff",
              }}
            />
          </View>
        </View>

        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginLinkText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our{" "}
          <Text style={styles.footerLink}>Terms of Service</Text> and{" "}
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </Text>
        <View style={styles.footerCompanyLogoContainer}>
          <CompanyLogo size={36} borderRadius={10} />
          <Text style={styles.footerCompanyNameText}>UuPp</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white ",
    justifyContent: "space-between",
  },
  contentContainer: {},
  companyLogoContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  companyLogo: {
    width: 100,
    height: 100,
  },
  pageTitleContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 100,
    marginRight: "auto",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  pageSubtitle: {
    fontSize: 16,
    color: "gray",
  },
  phoneNumberInputContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  dividerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 100,
    marginRight: 100,
  },
  divider: {
    width: "40%",
    height: 1,
    backgroundColor: "#E5E7EB",
    marginLeft: 10,
    marginRight: 10,
  },
  dividerText: {
    fontSize: 16,
    color: "gray",
    marginLeft: 10,
    marginRight: 10,
  },
  socialMediaContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  socialMediaButtonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  loginLinkContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  loginLinkText: {
    fontSize: 16,
    color: "gray",
  },
  loginLink: {
    color: "#2563EB",
  },
  footerContainer: {
    width: width,
    marginBottom: width * 0.16,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
  footerLink: {
    color: "#2563EB",
  },
  footerCompanyLogoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  footerCompanyLogo: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 10,
  },
  footerCompanyNameText: {
    fontSize: width * 0.075,
    color: "#bababa",
    marginLeft: 10,
    fontWeight: "bold",
  },
});
