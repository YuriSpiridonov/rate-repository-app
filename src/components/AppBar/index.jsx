import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar, //"#24292e",
    paddingTop: Constants.statusBarHeight,
    // marginTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    height: 80,
  },
  tab: {
    marginLeft: 16, //8,
    marginBottom: 16, //8,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={"Repositories"} path="/" style={styles.tab} />
        <AppBarTab tabName={"Sign In"} path="/SignIn" style={styles.tab} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
