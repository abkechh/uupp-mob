import { View, StyleSheet, StatusBar, Text } from "react-native";
import CustomDropDown from "@/app/components/Inputs/CutsomDropDown";
import { MaterialIcons } from "@expo/vector-icons";
export default function DOB() {
  // Generate days 01-31 with padding
  const days = Array.from({ length: 31 }, (_, i) => {
    const day = String(i + 1).padStart(2, "0");
    return {
      label: day,
      value: day,
    };
  });

  // All months
  const months = [
    { label: "Jan", value: "1" },
    { label: "Feb", value: "2" },
    { label: "Mar", value: "3" },
    { label: "Apr", value: "4" },
    { label: "May", value: "5" },
    { label: "Jun", value: "6" },
    { label: "Jul", value: "7" },
    { label: "Aug", value: "8" },
    { label: "Sep", value: "9" },
    { label: "Oct", value: "10" },
    { label: "Nov", value: "11" },
    { label: "Dec", value: "12" },
  ];

  // Generate years from 1920 to current year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1919 }, (_, i) => {
    const year = String(currentYear - i);
    return { label: year, value: year };
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialIcons name="cake" size={24} color="#3B82F6" />
        <Text style={styles.headerText}>When your birthday?</Text>
      </View>
      <View style={styles.dobContainer}>
        <CustomDropDown
          label="Day"
          width="30%"
          options={days}
          placeholder="Day"
          onSelect={(option) => console.log(option.value)}
        />
        <CustomDropDown
          label="Month"
          width="30%"
          options={months}
          placeholder="Month"
          onSelect={(option) => console.log(option.value)}
        />
        <CustomDropDown
          label="Year"
          width="30%"
          options={years}
          placeholder="Year"
          onSelect={(option) => console.log(option.value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dobContainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 48,
  },
  headerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
