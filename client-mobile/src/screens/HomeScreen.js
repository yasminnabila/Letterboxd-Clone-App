import { StyleSheet, Image, Text, View } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ProBanner from "../components/ProBanner";
import PopularMovie from "../components/PopularMovie";
import colors from "../../assets/colors/colors";
import { ScrollView } from "react-native-gesture-handler";
import HeaderGreeting from "../components/HeaderGreeting";
import Logo from "../../assets/images/letterboxd-logo-dark.png";

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
    <ScrollView style={styles.container}>
      {/* Header Image */}
      <View style={styles.headerimageWrapper}>
        <HeaderGreeting />
      </View>

      {/* Logo */}
      <View style={styles.logoWrapper}>
        <Image source={Logo} style={styles.logoimage} />
        <Text style={styles.sectionTitle}>Letterboxd</Text>
      </View>

      {/* Tagline */}
      <View style={styles.taglineWrapper}>
        <Text style={styles.taglineText}>Track films you've watched.</Text>
        <Text style={styles.taglineText}>Save those you want to see.</Text>
        <Text style={styles.taglineText}>Tell your friends what's good.</Text>
      </View>

      {/* Popular Movie List */}
      <View style={styles.popularWrapper}>
        <PopularMovie />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoWrapper: {
    textDecorationColor: "white",
    paddingTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  logoimage: {
    width: 90,
    height: 70,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.textLight,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat-ExtraBold",
  },
  headerimageWrapper: {
    marginTop: 30,
    paddingTop: 10,
    alignItems: "center",
  },
  taglineWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  taglineText: {
    marginTop: 15,
    fontSize: 25,
    color: colors.textLight,
    alignItems: "center",
    justifyContent: "center",
  },
  popularWrapper: {
    marginTop: 30
  }
});
