import React, { useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";

import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  listHeader: {
    zIndex: 1,
    elevation: 1,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const PressableRepositoryItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <RepositoryItem
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        forksCount={item.forksCount}
        stargazersCount={item.stargazersCount}
        ratingAverage={item.ratingAverage}
        reviewCount={item.reviewCount}
        ownerAvatarUrl={item.ownerAvatarUrl}
      />
    </Pressable>
  );
};

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { onPress } = this.props;
    return <RepositoryListHeader onPress={onPress} />;
  };

  render() {
    const { repositories } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        testID="RepositoryListContainer"
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        ListHeaderComponentStyle={styles.listHeader}
        renderItem={({ item }) => <PressableRepositoryItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const RepositoryList = () => {
  const [variables, setVariables] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });

  const onPress = (variables) => {
    setVariables(variables);
  };

  const { repositories } = useRepositories(
    variables.orderBy,
    variables.orderDirection
  );

  return (
    <RepositoryListContainer onPress={onPress} repositories={repositories} />
  );
};

export default RepositoryList;
