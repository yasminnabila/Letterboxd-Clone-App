import { useQuery } from "@apollo/client";
import { FETCH_MOVIES } from "../../config/queries";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { FlatList, SafeAreaView } from "react-native";
import MovieCards from "./MovieCards";

export default function PopularMovie({ navigation }) {
  const { loading, error, data: movieData } = useQuery(FETCH_MOVIES);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.movieCards}>
        <Text style={styles.movieText}>Popular this week</Text>
        <FlatList
          horizontal={true}
          data={movieData?.readAllMovies}
          renderItem={({ item }) => {
            return (
              <MovieCards movie={item} key={item.id} navigation={navigation} />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  movieCards: {
    flex: 15,
    justifyContent: "center",
    flexDirection: "column",
  },
  flatList: {
    paddingHorizontal: 20,
  },
  movieText: {
    marginTop: 5,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
