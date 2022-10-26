import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";

export default function DashboardScreen({ navigation }) {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    fetch("https://letterboxd-project.herokuapp.com/public")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setMovieData(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);
  // console.log(movie);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.movieCards}>
        <Text style={styles.movieText}>Popular this week</Text>
        <FlatList
          style={styles.flatList}
          horizontal={true}
          data={movieData}
          renderItem={({ item }) => (
            <View style={{ flex: 2, flexDirection: "column" }}>
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: 100, height: 150 }}
              />
            </View>
          )}
          keyExtractor={(movieData) => movieData.id}
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
