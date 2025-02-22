import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthStack from "./AuthStack";
import MainTab from "./MainTab";
import { getAuth } from "@/app/localStorage/localstorage";
import CompanyLogo from "../components/Logo/CompanyLogo";
import useAuthStore from "../store/authStore";
export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { token, userData, loadAuthData, setAuthData, logout } = useAuthStore();

  useEffect(() => {
    loadAuthData();
    setIsLoggedIn(token ? true : false);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [token]);

  // useEffect(() => {r
  //   const checkAuth = async () => {
  //     const auth = await getAuth();
  //     setIsLoggedIn(auth ? true : false);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   };
  //   checkAuth();
  // }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <CompanyLogo />
        </View>
      ) : isLoggedIn ? (
        <MainTab />
      ) : (
        <AuthStack />
      )}
    </View>
  );
}
