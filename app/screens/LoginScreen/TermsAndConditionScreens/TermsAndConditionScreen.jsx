import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { colors, typography, spacing } from "@/app/theme";
import termsContent from "./termsContent";
import privacyContent from "./privacyContent";
import CompanyLogo from "@/app/components/Logo/CompanyLogo";
const { width } = Dimensions.get("window");
export default function TermsAndConditionsScreen({ navigation, route }) {
  const { title, content } = route.params;
  const handleAccept = () => {
    // Navigate back or proceed
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <CompanyLogo />
        </View>
        <Text style={styles.header}>{title}</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {content.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.section}</Text>
              <Text style={styles.paragraph}>{section.text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Accept Button */}
        <TouchableOpacity style={styles.button} onPress={handleAccept}>
          <Text style={styles.buttonText}>I Accept</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignSelf: "center",
    width: width * 0.95,
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.xLarge,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.large,
  },
  header: {
    fontSize: typography.fontSizes.large,
    fontWeight: typography.fontWeights.bold,
    marginBottom: spacing.large,
    paddingBottom: spacing.medium,
  },
  contentContainer: {
    width: "100%",
  },
  section: {
    marginBottom: spacing.large,
    width: "100%",
  },
  sectionTitle: {
    fontSize: typography.fontSizes.medium,
    fontWeight: typography.fontWeights.bold,
    marginBottom: spacing.small,
  },
  paragraph: {
    fontSize: typography.fontSizes.small,
    color: colors.secondary,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    borderRadius: spacing.small,
    marginTop: spacing.large,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.fontSizes.small,
    fontWeight: typography.fontWeights.bold,
  },
});
