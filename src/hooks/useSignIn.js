import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

export const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    return data;
  };

  return [signIn, result];
};
