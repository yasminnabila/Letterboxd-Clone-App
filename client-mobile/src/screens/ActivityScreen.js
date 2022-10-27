import { View, Text, StyleSheet } from "react-native";

export default function ActivityScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Activity")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Activity Screen
      </Text>
    </View>
  );
}
