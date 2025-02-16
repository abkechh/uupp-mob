import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CustomTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  error,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 6,
    padding: 12,
    color: "#000",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
