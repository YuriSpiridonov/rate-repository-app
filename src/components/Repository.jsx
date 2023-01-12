import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import * as Linking from "expo-linking";
import useRepository from "../hooks/useRepository";
import { format } from "date-fns";

import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import Button from "./Button";

import theme from "../theme";

const repositoryStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    display: "flex",
    felxDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  separator: {
    height: 10,
  },
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

const ItemSeparator = () => <View style={repositoryStyles.separator} />;

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

const Repository = () => {
  const { id } = useParams();

  const { repository, loading } = useRepository(id);

  if (loading) {
    return null;
  }

  const reviews = repository.reviews.edges;

  const handleSubmit = () => {
    return Linking.openURL(repository.url);
  };

  return (
    <>
      <RepositoryItem
        fullName={repository.fullName}
        description={repository.description}
        language={repository.language}
        forksCount={repository.forksCount}
        stargazersCount={repository.stargazersCount}
        ratingAverage={repository.ratingAverage}
        reviewCount={repository.reviewCount}
        ownerAvatarUrl={repository.ownerAvatarUrl}
      />
      <View style={repositoryStyles.container}>
        <Button value="Open in GitHub" onSubmit={handleSubmit} />
      </View>
      <View style={repositoryStyles.separator}></View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        // inverted={true}
      />
    </>
  );
};

export default Repository;
