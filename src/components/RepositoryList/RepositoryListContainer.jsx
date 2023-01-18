import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import RepositoryListHeader from "./RepositoryListHeader";
import PressableRepositoryItem from "./PressableRepositoryItem";

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

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { onPress, onChangeSearch, searchQuery } = this.props;
    return (
      <RepositoryListHeader
        onPress={onPress}
        onChangeSearch={onChangeSearch}
        searchQuery={searchQuery}
      />
    );
  };

  render() {
    const { repositories, onEndReach } = this.props;
    console.log("onEndEach ", onEndReach);
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
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;
