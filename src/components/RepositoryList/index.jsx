import React, { useState } from "react";

import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../../hooks/useRepositories";

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
