import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation authenticateMutation($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview(
    $repositoryOwnerName: String!
    $repositoryName: String!
    $rating: Int!
    $review: String
  ) {
    createReview(
      review: {
        ownerName: $repositoryOwnerName
        repositoryName: $repositoryName
        rating: $rating
        text: $review
      }
    ) {
      repositoryId
    }
  }
`;
