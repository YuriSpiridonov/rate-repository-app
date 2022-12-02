import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";

import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8",
  },
  // reposContainer: {
  // lignItems: "center",
  // justifyContent: "center",
  // padding: 16,
  // baddingBottom: 16,
  // backgroundColor: "white",
  // marginBottom: 16,
  // flex: 1,
  // },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      {/* <View style={styles.reposContainer}> */}
      <RepositoryList />
      {/* </View> */}
    </View>
  );
};

export default Main;
