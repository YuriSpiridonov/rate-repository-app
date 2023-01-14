import { View, StyleSheet, ScrollView } from "react-native";
import { useContext } from "react";
import { useQuery, useApolloClient } from "@apollo/client";

import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import AuthStorageContext from "../../contexts/AuthStorageContext";
import { GET_LOGGEDIN_USER } from "../../graphql/queries";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar,
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    height: 80,
  },
  tab: {
    marginLeft: 16,
    marginBottom: 16,
  },
});

const AppBar = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const { data } = useQuery(GET_LOGGEDIN_USER);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={"Repositories"} path="/" style={styles.tab} />
        {data?.me ? (
          <>
            <AppBarTab
              tabName={"Create a review"}
              path="/CreateReview"
              style={styles.tab}
            />
            <AppBarTab
              tabName={"Sign Out"}
              onPress={signOut}
              style={styles.tab}
            />
          </>
        ) : (
          <>
            <AppBarTab tabName={"Sign In"} path="/SignIn" style={styles.tab} />
            <AppBarTab tabName={"Sign Up"} path="/SignUp" style={styles.tab} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
