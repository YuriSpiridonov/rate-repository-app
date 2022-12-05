import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // marginTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    height: 80,
    backgroundColor: "#24292e",
  },
  tab: {
    marginLeft: 16, //8,
    marginBottom: 16, //8,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabName={"Repositories"} path="/" style={styles.tab} />
      <AppBarTab tabName={"Sign In"} path="/SignIn" style={styles.tab} />
    </View>
  );
};

export default AppBar;
