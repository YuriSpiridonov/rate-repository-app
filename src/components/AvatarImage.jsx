import {
  // View,
  Image,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  avatarStyle: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
});

const AvatarImage = ({ imagePath }) => {
  return <Image style={styles.avatarStyle} source={{ uri: imagePath }} />;
};

export default AvatarImage;
