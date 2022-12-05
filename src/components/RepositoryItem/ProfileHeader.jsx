import { View, StyleSheet } from "react-native";

import AvatarImage from "./AvatarImage";
import Text from "../Text";

const profileHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    padding: 16,
    flefDirection: "column",
    backgroundColor: "white",
  },
  avatarContainer: {
    frexGrow: 0,
    paddingRight: 16,
  },
  infoContainer: {
    flex: 1,
    flexWrap: "wrap",
    paddingTop: 3,
  },
  textContainer: {
    paddingVertical: 6,
    marginBottom: 3,
  },
  textStyle: {
    color: "black",
  },
  languageStyle: {
    alignSelf: "flex-start",
    borderRadius: 3,
    padding: 3,
    backgroundColor: "#0366d6",
    overflow: "hidden",
  },
});

const ProfileHeader = ({ fullName, ownerAvatarUrl, description, language }) => {
  return (
    <View style={profileHeaderStyles.container}>
      <View style={profileHeaderStyles.avatarContainer}>
        <AvatarImage imagePath={ownerAvatarUrl} />
      </View>
      <View style={profileHeaderStyles.infoContainer}>
        <Text
          color="primary"
          fontSize="subheading"
          fontWeight="bold"
          style={profileHeaderStyles.textStyle}
        >
          {fullName}
        </Text>
        <View style={profileHeaderStyles.textContainer}>
          <Text color="textSecondary">{description}</Text>
        </View>
        <View>
          <Text color="white" style={profileHeaderStyles.languageStyle}>
            {language}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
