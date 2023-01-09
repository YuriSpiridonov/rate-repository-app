import { FlatList, View, StyleSheet } from "react-native";

import RepositoryItem from "./RepositoryItem";

import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      testID="RepositoryListContainer"
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, separator }) => (
        <RepositoryItem
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          forksCount={item.forksCount}
          stargazersCount={item.stargazersCount}
          ratingAverage={item.ratingAverage}
          reviewCount={item.reviewCount}
          ownerAvatarUrl={item.ownerAvatarUrl}
          style={separator}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
  // const repositoryNodes = repositories
  // ? repositories.edges.map((edge) => edge.node)
  // : [];

  // return (
  //   <FlatList
  //     data={repositoryNodes}
  //     ItemSeparatorComponent={ItemSeparator}
  //     renderItem={({ item, separator }) => (
  //       <RepositoryItem
  //         fullName={item.fullName}
  //         description={item.description}
  //         language={item.language}
  //         forksCount={item.forksCount}
  //         stargazersCount={item.stargazersCount}
  //         ratingAverage={item.ratingAverage}
  //         reviewCount={item.reviewCount}
  //         ownerAvatarUrl={item.ownerAvatarUrl}
  //         style={separator}
  //       />
  //     )}
  //     keyExtractor={(item) => item.id}
  //   />
  // );
};

export default RepositoryList;
