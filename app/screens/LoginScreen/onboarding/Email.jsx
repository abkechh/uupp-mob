import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomTextInput from "@/app/components/Inputs/CustomTextInput";
import OnBoardingButton from "@/app/components/Buttons/OnBoardingButton";
export default function Email({ email, setEmail }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialIcons name="email" size={24} color="#3B82F6" />
        <Text style={styles.headerText}>Verify Email!</Text>
      </View>
      <Text style={styles.subText}>Please enter the email address.</Text>
      <View style={styles.inputContainer}>
        <CustomTextInput
          label="Email"
          placeholder="name@example.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <TouchableOpacity style={styles.subButton}>
        <Text style={styles.subButtonText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    gap: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "white",
    paddingBottom: 24,
    paddingTop: 24,
  },
  headerContainer: {
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 16,
  },

  subButtonText: {
    color: "#3B82F6",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
