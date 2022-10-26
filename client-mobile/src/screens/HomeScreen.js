import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import ProBanner from "../components/ProBanner";
import DashboardScreen from "../screens/DashboardScreen";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* * Movie List * */}
      <View style={styles.movieWrapper}>
        <Text style={styles.sectionTitle}>Letterboxd</Text>
        <View>
          <ProBanner />
        </View>
        <View>
          <DashboardScreen />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000a12",
    alignItems: "center",
  },
  movieWrapper: {
    // flex: 6,
    textDecorationColor: "white",
    paddingTop: 80,
    alignItems: "center",
    // backgroundColor: "pink",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
