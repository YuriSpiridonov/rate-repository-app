import { View, StyleSheet } from "react-native";

import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  avatarContainer: {
    frexGrow: 0,
    paddingRight: 16,
  },
  infoContainer: {
    frexGrow: 1,
    paddingTop: 4,
  },
  textContainer: {
    paddingVertical: 6,
  },
  textStyle: {
    color: "black",
  },
  languageStyle: {
    alignSelf: "flex-start",
    borderRadius: 4,
    padding: 3,
    backgroundColor: "#0366d6",
    borderColor: "#0366d6",
    margin: 0,
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
