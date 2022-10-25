import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MovieCard = (props) => {
  return (
    <View style={styles.movie}>
      <Text style={styles.cardTitle}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000a12",
    alignItems: "center",
    // justifyContent: "center",
  },
  cardTitle: {
    color: "white",
  },
  movie: {},
});

export default MovieCard;
