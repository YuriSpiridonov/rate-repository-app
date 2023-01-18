import { StyleSheet, View } from "react-native";

import { format } from "date-fns";

import Text from "../Text";

import theme from "../../theme";

const repositoryStyles = StyleSheet.create({
  reviewContainer: {
    flexDirection: "row",
    flexGrow: 1,
    backgroundColor: theme.colors.white,
    padding: 16,
  },
  reviewRating: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    borderWidth: 3,
    borderColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  reviewText: {
    alignSelf: "flex-start",
    marginLeft: 16,
    flex: 1,
  },
});

const ReviewItem = ({ review }) => {
  if (!review) {
    return null;
  }
  const date = format(new Date(review.node.createdAt), "dd.MM.yyyy");

  return (
    <View style={repositoryStyles.reviewContainer}>
      <View style={repositoryStyles.reviewRating}>
        <Text fontSize="subheading" fontWeight="bold" color="primary">
          {review.node.rating}
        </Text>
      </View>
      <View style={repositoryStyles.reviewText}>
        <Text fontSize="subheading" fontWeight="bold">
          {review.node.user.username}
        </Text>
        <Text color="textSecondary" style={{ paddingTop: 3, paddingBottom: 3 }}>
          {date}
        </Text>
        <Text>{review.node.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
