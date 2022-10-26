import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";

const Dashboard = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("https://letterboxd-project.herokuapp.com/public")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setMovie(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);
  //   console.log(movie);

  return (
    <SafeAreaView style={styles.safeAreaDashboard}>
      <View style={styles.itemDashboard}>
        <Text>Movie cards will be here</Text>
        <FlatList>

        </FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaDashboard: {
    flex: 1
  },
  itemDashboard: {
    position: "relative"
  },
});
export default Dashboard;
