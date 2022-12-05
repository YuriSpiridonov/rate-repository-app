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
    paddingLeft: 8,
    paddingBottom: 8,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab style={styles.tab} tabName={"Repositories"} />
    </View>
  );
};

export default AppBar;
