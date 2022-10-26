import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-ico-material-design";
import ProBanner from "./src/components/ProBanner";
import Dashboard from "./src/screens/DashboardScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* * Movie List * */}
      <View style={styles.movieWrapper}>
        <Text style={styles.sectionTitle}>Letterboxd</Text>
        <View>
          <ProBanner />
        </View>
        <View>
          <Dashboard />
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
    textDecorationColor: "white",
    paddingTop: 80,
    // paddingHorizontal: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
