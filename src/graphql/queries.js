import { gql } from "@apollo/client";

import { REPOSITORY_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query Repositories {
    repositories {
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
