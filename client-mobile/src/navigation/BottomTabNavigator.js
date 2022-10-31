import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//? SCREENS
import HomeScreen from "../screens/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
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
          } else if (route.name === "Search") {
            iconName = focused ? "search-sharp" : "search-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Activity") {
            iconName = focused ? "lightning-bolt" : "lightning-bolt-outline";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "#01579b",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarStyle: { backgroundColor: "#607d8b" },
      })}
    >
      <Tab.Screen name="Dashboard" component={StackNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: "center",
    justifyContent: "center",
  },
  navigatorTab: {
    backgroundColor: "#90a4ae",
  },
  containerText: {
    marginTop: 5,
    padding: 10,
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "pink",
  },
});
