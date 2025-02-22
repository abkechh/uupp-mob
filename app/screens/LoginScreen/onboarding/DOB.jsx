import { View, StyleSheet, StatusBar, Text } from "react-native";
import CustomDropDown from "@/app/components/Inputs/CutsomDropDown";
import { MaterialIcons } from "@expo/vector-icons";
import OnBoardingButton from "@/app/components/Buttons/OnBoardingButton";

export default function DOB({ dob, setDob }) {
  // Parse existing dob if it exists
  const [selectedDay, selectedMonth, selectedYear] = dob
    ? dob.split("-")
    : ["", "", ""];

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
    { label: "Jan", value: "01" },
    { label: "Feb", value: "02" },
    { label: "Mar", value: "03" },
    { label: "Apr", value: "04" },
    { label: "May", value: "05" },
    { label: "Jun", value: "06" },
    { label: "Jul", value: "07" },
    { label: "Aug", value: "08" },
    { label: "Sep", value: "09" },
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

  const updateDOB = (type, value) => {
    const [day, month, year] = dob ? dob.split("-") : ["", "", ""];
    let newDOB;

    switch (type) {
      case "day":
        newDOB = `${value}-${month}-${year}`;
        break;
      case "month":
        newDOB = `${day}-${value}-${year}`;
        break;
      case "year":
        newDOB = `${day}-${month}-${value}`;
        break;
    }

    setDob(newDOB);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialIcons name="cake" size={24} color="#3B82F6" />
        <Text style={styles.headerText}>When's your birthday?</Text>
      </View>
      <View style={styles.dobContainer}>
        <CustomDropDown
          label="Day"
          width="30%"
          options={days}
          placeholder="Day"
          value={selectedDay}
          onSelect={(option) => updateDOB("day", option.value)}
        />
        <CustomDropDown
          label="Month"
          width="30%"
          options={months}
          placeholder="Month"
          value={selectedMonth}
          onSelect={(option) => updateDOB("month", option.value)}
        />
        <CustomDropDown
          label="Year"
          width="30%"
          options={years}
          placeholder="Year"
          value={selectedYear}
          onSelect={(option) => updateDOB("year", option.value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 24,
    paddingBottom: 24,
    width: "90%",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    alignItems: "center",
  },
  dobContainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
