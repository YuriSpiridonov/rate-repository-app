import { Text, View } from "react-native";

const RepositoryItem = ({
  //   id,
  fullName,
  description,
  language,
  forksCount,
  stargazetsCount,
  ratingAverage,
  reviewCount,
  style,
  //   ownerAvatarUrl,
}) => {
  return (
    <View style={style}>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazetsCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
