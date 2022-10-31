import { StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ProBanner from "../components/ProBanner";
import PopularMovie from "../components/PopularMovie";
import colors from "../../assets/colors/colors";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Montserrat-ExtraBold": require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* * Movie List * */}
      <View style={styles.movieWrapper}>
        <Text style={styles.sectionTitle}>Letterboxd</Text>
        <View>
          <ProBanner />
        </View>
        <View>
          <PopularMovie />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  movieWrapper: {
    textDecorationColor: "white",
    paddingTop: 80,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.textLight,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat-ExtraBold",
  },
});
