import { useQuery } from "@apollo/client";
import { GET_LOGGEDIN_USER } from "../graphql/queries";

const useAuthUser = (includeReviews) => {
  // const showReviews = false;
  // const { data } = useQuery(GET_LOGGEDIN_USER, {
  //   variables: {
  //     showReviews: showReviews,
  //   },
  // });

  // return data;
  return useQuery(GET_LOGGEDIN_USER, {
    variables: {
      includeReviews: includeReviews,
    },
  });
};

export default useAuthUser;
