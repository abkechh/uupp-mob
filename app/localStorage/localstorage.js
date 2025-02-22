import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAuth = async (token, userData) => {
  try {
    const authData = {
      token,
      user: userData,
    };
    const jsonValue = JSON.stringify(authData);
    await AsyncStorage.setItem("auth", jsonValue);
  } catch (error) {
    console.error("Error saving auth data:", error);
  }
};

export const getAuth = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("auth");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Error getting auth data:", error);
    return null;
  }
};

export const removeAuth = async () => {
  try {
    await AsyncStorage.removeItem("auth");
  } catch (error) {
    console.error("Error removing auth data:", error);
  }
};
