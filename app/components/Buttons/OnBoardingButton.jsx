import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

const OnBoardingButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: height * 0.013, // 2% of screen height
    paddingHorizontal: width * 0.05, // 8% of screen width
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.85, // 85% of screen width
    maxWidth: 400, // Maximum width to maintain usability on larger screens
  },
  buttonText: {
    color: "#fff",
    fontSize: Math.min(width * 0.045, 16), // Responsive font size with maximum limit
    fontWeight: "500",
  },
});

export default OnBoardingButton;
