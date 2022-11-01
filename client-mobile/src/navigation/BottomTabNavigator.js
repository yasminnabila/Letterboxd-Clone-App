import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";

//? SCREENS
import ProfileScreen from "../screens/ProfileScreen";
import StackNavigator from "./StackNavigator";

//? INVOKE TAB NAVIGATOR
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Dashboard") {
            iconName = "page-multiple";
            return <Foundation name={iconName} size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.textLight,
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarStyle: { backgroundColor: "#607d8b" },
      })}
    >
      <Tab.Screen name="Dashboard" component={StackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
