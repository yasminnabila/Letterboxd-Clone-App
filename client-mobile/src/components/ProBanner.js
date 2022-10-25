import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MovieCard = (props) => {
  return (
    <View style={styles.banner}>
      <View style={styles.itemLeft}>
        <Text style={styles.square}>PRO</Text>
        <Text style={styles.cardTitle}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    color: "black",
    alignItems: "center",
  },
  banner: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    // flexWrap: "wrap",
  },
  square: {
    width: 40,
    height: 25,
    padding: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6f00",
    fontWeight: "bold",
  },
});

export default MovieCard;
