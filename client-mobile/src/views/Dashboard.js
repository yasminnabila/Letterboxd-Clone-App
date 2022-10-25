// import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";

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
  console.log(movie);

  
};

export default Dashboard;
