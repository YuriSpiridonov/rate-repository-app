import { View, StyleSheet } from "react-native";

import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white, //"white",
    flexDirection: "column",
  },
  profileStats: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-around",
    paddingBottom: 16,
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <ProfileHeader
        fullName={fullName}
        ownerAvatarUrl={ownerAvatarUrl}
        description={description}
        language={language}
      />
      <View style={styles.profileStats}>
        <ProfileStats number={stargazersCount} value="Stars" />
        <ProfileStats number={forksCount} value="Forks" />
        <ProfileStats number={reviewCount} value="Reviews" />
        <ProfileStats number={ratingAverage} value="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
