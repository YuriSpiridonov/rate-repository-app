import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";

import AppBar from "./AppBar/";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background, // "#e1e4e8",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/SignIn" element={<SignIn />} exact />
      </Routes>
    </View>
  );
};

export default Main;
