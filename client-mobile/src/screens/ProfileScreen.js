import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Avatar from "../../assets/images/avatar.png";
import colors from "../../assets/colors/colors";
import poster_1 from "../../assets/images/poster_1.jpeg";
import poster_2 from "../../assets/images/poster_2.jpeg";
import poster_3 from "../../assets/images/poster_3.jpeg";
import poster_4 from "../../assets/images/poster_4.jpeg";
import activity_1 from "../../assets/images/activity_1.jpeg";
import activity_2 from "../../assets/images/activity_2.jpeg";
import activity_3 from "../../assets/images/activity_3.jpeg";
import activity_4 from "../../assets/images/activity_4.jpeg";
import { useState } from "react";
import ProBanner from "../components/ProBanner";

export default function ProfileScreen({}) {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <View style={styles.headerWrapper}>
          {/* Header Left */}
          <View style={styles.headerLeft}>
            <Feather name="settings" size={24} color={colors.textLight} />
          </View>
          {/* Profile Name */}
          <View style={styles.usernameWrapper}>
            <Text style={styles.username}>Anya Taylor-Joy</Text>
          </View>
          {/* Header Right */}
          <View style={styles.headerRight}>
            <Entypo
              name="share-alternative"
              size={24}
              color={colors.textLight}
            />
          </View>
        </View>

        {/* Pro Banner */}
        <View>
          <ProBanner />
        </View>

        {/* Profile Pict */}
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatarImage} source={Avatar} />
        </View>

        {/* Loc & Twitter */}
        <View style={styles.profileIconWrapper}>
          {/* Header Left */}
          <View style={styles.headerLeft}>
            <Ionicons name="pin" size={24} color="white" />
            <Text style={{ color: "gray" }}>Neverland</Text>
          </View>
          {/* Header Right */}
          <View style={styles.headerRight}>
            <MaterialCommunityIcons name="twitter" size={24} color="white" />
            <Text style={{ color: "gray" }}>@anyataylorjoy</Text>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioWrapper}>
          <Text style={{ color: "gray", marginBottom: 3 }}>
            Favorites: horror
          </Text>
          <Text style={{ color: "gray" }}>
            #horror and classic film enthusiast
          </Text>
        </View>

        {/* Divider Line */}
        <View style={styles.dividerWrapper}>
          <Text style={{ color: "gray" }}>
            _________________________________________________________
          </Text>
        </View>

        {/* Favorites */}
        <Text style={styles.movieCardText}>FAVORITES</Text>
        <View style={styles.movieCardWrapper}>
          <ImageLoader style={styles.favoriteFilmImage} source={poster_1} />
          <ImageLoader style={styles.favoriteFilmImage} source={poster_2} />
          <ImageLoader style={styles.favoriteFilmImage} source={poster_3} />
          <ImageLoader style={styles.favoriteFilmImage} source={poster_4} />
        </View>

        {/* Divider Line */}
        <View style={styles.dividerWrapper}>
          <Text style={{ color: "gray" }}>
            _________________________________________________________
          </Text>
        </View>

        {/* Recent Activity */}
        <Text style={styles.movieCardText}>RECENT ACTIVITY</Text>
        <View style={styles.movieCardWrapper}>
          <ImageLoader style={styles.favoriteFilmImage} source={activity_1} />
          <ImageLoader style={styles.favoriteFilmImage} source={activity_2} />
          <ImageLoader style={styles.favoriteFilmImage} source={activity_3} />
          <ImageLoader style={styles.favoriteFilmImage} source={activity_4} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

function ImageLoader({ source }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        onLoad={() => setLoaded(true)}
        style={styles.favoriteFilmImage}
        source={source}
      />
      {!loaded ? (
        <ActivityIndicator
          style={{ position: "absolute", top: 50, left: 20, right: 20 }}
        />
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  usernameWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    color: colors.textLight,
    fontSize: 22,
    fontWeight: "bold",
  },
  avatarWrapper: {
    textDecorationColor: "white",
    paddingTop: 10,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  avatarImage: {
    width: 100,
    height: 100,
  },
  profileIconWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    margin: 10,
  },
  headerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerRight: {
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bioWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  dividerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 5,
  },
  movieCardWrapper: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexDirection: "row",
    marginLeft: 5,
  },
  favoriteFilmImage: {
    width: 95,
    height: 150,
    padding: 15,
    backgroundColor: "#607d8b",
  },
  movieCardText: {
    color: colors.textGrey,
    fontSize: 15,
    paddingHorizontal: 20,
    padding: 10,
  },
});
