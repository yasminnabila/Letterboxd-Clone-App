import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MovieCards({ movie }) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            id: movie.id,
          })
        }
      >
        <View style={styles.card}>
          <Image
            source={{ uri: movie.imageUrl }}
            style={{ width: 100, height: 150 }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    margin: 1,
    marginLeft: 10,
  },
});
