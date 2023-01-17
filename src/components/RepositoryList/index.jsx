import React, { useState } from "react";

import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../../hooks/useRepositories";

const RepositoryList = () => {
  const [variables, setVariables] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const onPress = (variables) => setVariables(variables);

  const { repositories } = useRepositories(
    variables.orderBy,
    variables.orderDirection,
    searchQuery
  );

  return (
    <RepositoryListContainer
      onPress={onPress}
      repositories={repositories}
      onChangeSearch={onChangeSearch}
      searchQuery={searchQuery}
    />
  );
};

export default RepositoryList;
