import { StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import * as Linking from "expo-linking";
import useRepository from "../hooks/useRepository";

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
});

const Repository = () => {
  const { id } = useParams();

  const { repository, loading } = useRepository(id);

  if (loading) {
    return null;
  }

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
    </>
  );
};

export default Repository;
