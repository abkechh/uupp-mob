import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

const CompanyStampWithIcon = ({
  companyName = "Your Company",
  companyIcon, // optional company icon
  backgroundColor = "#f3f6f8",
  textColor = "#666666",
  size = "medium", // small, medium, large
}) => {
  const getSize = () => {
    switch (size) {
      case "small":
        return {
          paddingVertical: 4,
          paddingHorizontal: 8,
          fontSize: 12,
          iconSize: 14,
        };
      case "large":
        return {
          paddingVertical: 8,
          paddingHorizontal: 16,
          fontSize: 16,
          iconSize: 20,
        };
      default: // medium
        return {
          paddingVertical: 6,
          paddingHorizontal: 12,
          fontSize: 14,
          iconSize: 16,
        };
    }
  };

  const sizeStyles = getSize();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor },
        {
          paddingVertical: sizeStyles.paddingVertical,
          paddingHorizontal: sizeStyles.paddingHorizontal,
        },
      ]}
    >
      {companyIcon && (
        <Image
          source={companyIcon}
          style={[
            styles.icon,
            {
              width: sizeStyles.iconSize,
              height: sizeStyles.iconSize,
              marginRight: sizeStyles.iconSize / 2,
            },
          ]}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    alignSelf: "flex-start",
    maxWidth: width * 0.8,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
  },
  icon: {
    borderRadius: 2,
    opacity: 0.6, // Makes the icon more grayish
    tintColor: "#666666", // Converts the icon to grayscale with a specific gray tone
  },
});

export default CompanyStampWithIcon;
