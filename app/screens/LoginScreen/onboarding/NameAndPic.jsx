import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CustomTextInput from "../../../components/Inputs/CustomTextInput";
import OnBoardingButton from "@/app/components/Buttons/OnBoardingButton";
import AddProfilePic from "@/app/components/Buttons/AddProfilePic";
const NameAndPic = ({ firstName, setFirstName, lastName, setLastName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <AddProfilePic />
        <CustomTextInput
          placeholder="First Name"
          label="First Name"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
        <CustomTextInput
          placeholder="Last Name"
          label="Last Name"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 24,
  },
  inputContainer: {
    width: "100%",
    gap: 16,
    marginBottom: 24,
  },
  input: {
    width: "100%",
  },
});

export default NameAndPic;
