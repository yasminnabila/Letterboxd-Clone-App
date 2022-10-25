import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-ico-material-design";
import ProBanner from "./src/components/ProBanner";
import Dashboard from "./src/views/Dashboard";

export default function App() {
  return (
    <View style={styles.container}>
      {/* * Movie List * */}
      <View style={styles.movieWrapper}>
        <Text style={styles.sectionTitle}>Letterboxd</Text>
        <View style={styles.banner}>
          {/* * This is where the banner will show * */}
          <ProBanner
            text={
              "Remove ads, add profile stats, activity and service filters, favorite streaming services and more by upgrading to Pro"
            }
          />
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
    // justifyContent: "center",
  },
  movieWrapper: {
    textDecorationColor: "white",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  banner: {},
});
