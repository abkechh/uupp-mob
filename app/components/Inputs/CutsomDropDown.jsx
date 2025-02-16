import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomDropDown({
  label,
  options = [],
  value,
  onSelect,
  placeholder = "Select an option",
  width = "100%",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <View style={[styles.container, { width }]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.dropdownWrapper}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.selectedText,
              !selectedOption && styles.placeholderText,
            ]}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
          <MaterialIcons
            name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.dropdownList}>
            <ScrollView
              nestedScrollEnabled
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
            >
              {options.map((option, index) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.option,
                    index === options.length - 1 && styles.lastOption,
                    option.value === value && styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(option)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      option.value === value && styles.selectedOptionText,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 1000,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
    marginLeft: 8,
  },
  dropdownWrapper: {
    position: "relative",
    width: "100%",
    elevation: 1000,
  },
  dropdownButton: {
    elevation: 1001,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 48,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
  },
  selectedText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  placeholderText: {
    color: "#999",
  },
  dropdownList: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    maxHeight: 200,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    elevation: 1001,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  scrollView: {
    width: "100%",
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    textAlign: "center",
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  selectedOption: {
    backgroundColor: "#F5F5F5",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  selectedOptionText: {
    color: "#007AFF",
    fontWeight: "500",
  },
});
