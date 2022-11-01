import DetailScreen from "../screens/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Movie List">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, headerBackTitle: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false, headerBackTitle: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
