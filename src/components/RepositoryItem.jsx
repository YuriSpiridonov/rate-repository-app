import {
  // Text,
  View,
  StyleSheet,
} from "react-native";

import Text from "./Text";
import AvatarImage from "./AvatarImage";

const styles = StyleSheet.create({
  // userContainer: {
  //   padding: 16,
  //   // display: "flex",
  //   // flexDuirection: "row",
  //   // flexGrow: 1,
  //   // border: 3,
  //   // borderColor: "red",
  // },
  check: {
    flefDirection: "column",
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    flexGrow: 1,
    // lignItems: "center",
    // justifyContent: "center",
    padding: 16,
    // baddingBottom: 16,
    // backgroundColor: "white",
    // marginBottom: 16,
    // flex: 1,
  },
  avatarContainer: {
    frexGrow: 0,
    paddingRight: 16,
  },
  infoContainer: {
    frexGrow: 1,
    paddingTop: 4,
    // paddingBottom: 4,
    // paddingVertical: 15,
  },
  textContainer: {
    paddingVertical: 6,
  },
  textStyle: {
    color: "black",
  },
  languageStyle: {
    // paddingTop: 4,
    alignSelf: "flex-start",
    borderRadius: 3,
    padding: 3,
    backgroundColor: "#0366d6",
    margin: 0,
  },
});

const profileFooterStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-around",
    paddingBottom: 16,
  },
  box: {
    felxDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
  },
});

const ProfileFooter = ({ value, name }) => {
  return (
    <View style={profileFooterStyles.box}>
      <Text color="textPrimary" fontSize="subheading" fontWeight="bold">
        {value >= 1000
          ? (value / 1000).toFixed(1).toString() + "k"
          : value.toString()}
      </Text>
      <Text color="textSecondary">{name}</Text>
    </View>
  );
};

const RepositoryItem = ({
  //   id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  style,
  ownerAvatarUrl,
}) => {
  // {styles.userContainer}>
  // style={styles.container}>
  return (
    <View style={styles.check}>
      <View style={style}>
        {/* <View style={styles.userContainer}> */}
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <AvatarImage imagePath={ownerAvatarUrl} />
          </View>
          <View style={styles.infoContainer}>
            <Text
              color="primary"
              fontSize="subheading"
              fontWeight="bold"
              style={styles.textStyle}
            >
              {fullName}
            </Text>
            <View style={styles.textContainer}>
              <Text
                color="textSecondary"
                // fontSize="subheading"
              >
                {description}
              </Text>
            </View>
            <View
            // style={styles.languageStyle}
            >
              <Text
                color="white"
                style={styles.languageStyle}
                // fontSize="subheading"
              >
                {language}
              </Text>
            </View>
            {/* </View> */}
          </View>

          {/* <Text>Language: {language}</Text>
        <Text>Stars: {stargazersCount}</Text>
        <Text>Forks: {forksCount}</Text>
        <Text>Reviews: {reviewCount}</Text>
        <Text>Rating: {ratingAverage}</Text> */}
          {/* <ProfileFooter value={stargazersCount} name="stars">
            {stargazersCount}{" "}
          </ProfileFooter> */}
        </View>
        <View style={profileFooterStyles.container}>
          <ProfileFooter value={stargazersCount} name="Stars" />
          <ProfileFooter value={forksCount} name="Forks" />
          <ProfileFooter value={reviewCount} name="Reviews" />
          <ProfileFooter value={ratingAverage} name="Rating" />
          {/* {stargazersCount}{" "}
          </ProfileFooter> */}
        </View>
        {/* </View> */}
        {/* <Text>Language: {language}</Text> */}
        {/* <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text> */}
      </View>
    </View>
  );
};

export default RepositoryItem;
