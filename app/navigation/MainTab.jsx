import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { removeAuth } from "@/app/localStorage/localstorage";
import useAuthStore from "@/app/store/authStore";
const Tab = createBottomTabNavigator();

export default function MainTab() {
  const { logout } = useAuthStore();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Home</Text>
            <Button title="Logout" onPress={() => logout()} />
          </View>
        )}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Goal"
        component={() => (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Goal</Text>
          </View>
        )}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="target" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
