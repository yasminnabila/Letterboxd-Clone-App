import { useQuery } from "@apollo/client";
import { FETCH_MOVIE_DETAIL } from "../../config/queries";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params;
  console.log(id, "ini id movie");
  const {
    loading,
    error,
    data: movieDetail,
  } = useQuery(FETCH_MOVIE_DETAIL, {
    variables: { readOneMovieId: id },
  });
  let dataDetail = movieDetail?.readOneMovie;
  let movieTrailer = movieDetail?.readOneMovie?.trailer;
  // console.log(dataDetail, "ini variabel dataDetail")

  if (loading) {
    return (
      <ActivityIndicator
        marginTop={400}
        size={"large"}
        color={"rgb(42, 104, 76)"}
      />
    );
  }

  if (error)
    return (
      <SafeAreaView>
        <View style={{ flexDirection: "row" }}>
          <Container marginY={100} marginX={75} backgroundColor="red.400">
            <Box backgroundColor={"Red"}>
              <Text> Oops! Something's wrong! {error.message} </Text>
            </Box>
          </Container>
        </View>
      </SafeAreaView>
    );

  return (
    <View style={styles.container}>
      <Text>Ini Detail Screen!</Text>
      <SafeAreaView>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Entypo name="chevron-left" size={18} color={colors.textLight} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <Entypo
              name="dots-three-horizontal"
              size={18}
              color={colors.textLight}
            />
          </View>
        </View>
      </SafeAreaView>

      {/* Movie Info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View>
            {/* Titles */}
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{dataDetail?.title}</Text>
              {/* <Text style={styles.title}>10 Things I Hate About You</Text> */}
            </View>

            <View style={styles.movieDetailWrapper}>
              {/* Genre */}
              <View style={styles.movieDetailItem}>
                <Text style={styles.genre}>{dataDetail?.Genre?.name}</Text>
                {/* <Text style={styles.genre}>Romantic</Text> */}
              </View>

              {/* Rating */}
              <View style={styles.movieDetailItem}>
                <Text style={styles.genre}>{dataDetail?.rating}/5</Text>
                {/* <Text style={styles.genre}>4/5</Text> */}
              </View>
            </View>

            {/* Trailer */}
            <View style={styles.trailerWrapper}>
              {/* <View style={styles.trailerItems}> */}
              <MaterialCommunityIcons
                name="play"
                size={12}
                color={colors.textGrey}
              />
              {/* <Text
                style={styles.trailer}
                onPress={() =>
                  Linking.openURL("https://www.youtube.com/embed/Ax8qnxP2TWY")
                }
              >
                TRAILER
              </Text> */}
              <Text
                style={styles.trailer}
                onPress={() => Linking.openURL("movieTrailer")}
              >
                TRAILER
              </Text>

              {/* </View> */}
            </View>
          </View>
        </View>

        {/* Poster */}
        <View style={styles.imageWrapper}>
          <Image
            // source={{
            //   uri: "https://media-cache.cinematerial.com/p/500x/kuslonid/10-things-i-hate-about-you-movie-poster.jpg?v=1456036365",
            // }}
            source={{
              uri: dataDetail?.imageUrl,
            }}
            style={styles.itemImage}
          />
        </View>
      </View>

      {/* Synopsis */}
      <View style={styles.synopsisWrapper}>
        <Text style={styles.synopsis}>{dataDetail?.synopsis}</Text>
      </View>
    </View>
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
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.borderGrey,
    borderWidth: 1,
    padding: 12,
    borderRadius: 60,
  },
  headerRight: {
    borderColor: colors.borderGrey,
    borderWidth: 1,
    padding: 12,
    borderRadius: 60,
  },
  infoWrapper: {
    flexDirection: "row",
  },
  infoLeftWrapper: {
    flex: 2.5,
  },
  imageWrapper: {
    flex: 2,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    color: colors.textGrey,
    fontSize: 25,
    fontWeight: "bold",
    width: "90%",
  },
  movieDetailItem: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  genre: {
    color: colors.textGrey,
  },
  movieDetailWrapper: {
    flexDirection: "row",
    justifyContent: "around",
  },
  itemImage: {
    marginLeft: 30,
    marginTop: 20,
    width: 130,
    height: 200,
    justifyContent: "space-between",
  },
  synopsis: {
    marginTop: 30,
    paddingHorizontal: 20,
    color: colors.textGrey,
    fontSize: 16,
    justifyContent: "center",
  },
  trailerWrapper: {
    backgroundColor: "gray",
    borderRadius: 90,
    marginTop: 30,
    marginLeft: 20,
    flexDirection: "row",
    paddingHorizontal: 15,
    width: "45%",
  },
  trailer: {
    fontSize: 15,
    color: colors.textLight,
    marginLeft: 5,
  },
});
