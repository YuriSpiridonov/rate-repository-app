import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation authenticateMutation($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;
