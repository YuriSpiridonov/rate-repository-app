// import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const repositories = data.repositories;

  return { repositories, loading }; // , ...result

  // const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState(false);

  // const fetchRepositories = async () => {
  //   setLoading(true);

  //   const response = await fetch("http://192.168.178.21:5000/api/repositories");
  //   const json = await response.json();

  //   console.log("json ", json);

  //   setLoading(false);
  //   setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  // return { result, loading, refetch: fetchRepositories }; // repositories
};

export default useRepositories;
