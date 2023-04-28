import React from 'react';
import useSWR from "swr";

function useGetMovies(link) {
  const fetcher = async (url) => {
    const response =  await fetch(url);
    const parsed = await response.json();
    return parsed.results;
  }

  const { data, error, isLoading } = useSWR(link, fetcher, {fallbackData: []});

  return {data, isLoading, error};
}

export default useGetMovies;
