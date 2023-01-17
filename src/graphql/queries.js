import { gql } from "@apollo/client";

import { REPOSITORY_DETAILS } from "./fragments";

export const GET_REPOSITORY = gql`
  ${REPOSITORY_DETAILS}
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
`;

export const GET_LOGGEDIN_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
