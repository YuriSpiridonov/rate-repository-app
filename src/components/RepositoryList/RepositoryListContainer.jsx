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

export default RepositoryListContainer;
