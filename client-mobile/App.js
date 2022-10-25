import { StyleSheet, Text, View } from "react-native";
import ProBanner from "./src/components/ProBanner";

export default function App() {
  return (
    <View style={styles.container}>
      {/* * Movie List * */}
      <View style={styles.movieWrapper}>
        <Text style={styles.sectionTitle}>Letterboxd</Text>
        <View style={styles.movies}>
          {/* * This is where the movie cards will show * */}
          <ProBanner
            text={
              "Remove ads, add profile stats, activity and service filters, favorite streaming services and more by upgrading to Pro"
            }
          />
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
  movies: {},
});
