import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./src/navigation/BottomTabNavigator";
import client from "./config/apollo-connection";
import { ApolloProvider } from "@apollo/client";
import "react-native-gesture-handler";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
