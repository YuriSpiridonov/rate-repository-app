import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

export const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({
    repositoryOwnerName,
    repositoryName,
    rating,
    review,
  }) => {
    return await mutate({
      variables: {
        repositoryOwnerName,
        repositoryName,
        rating,
        review,
      },
    });
  };

  return [createReview, result];
};
