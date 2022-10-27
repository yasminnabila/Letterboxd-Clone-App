import { View, Text, StyleSheet } from "react-native";

export default function SearchScreen({ navigation }) {
        return (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              onPress={() => navigation.navigate("Search")}
              style={{ fontSize: 26, fontWeight: "bold" }}
            >
              Search Screen
            </Text>
          </View>
        );
}
