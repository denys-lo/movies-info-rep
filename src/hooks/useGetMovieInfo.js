import React from 'react';
import useSWR from "swr";

function useGetMovieInfo(link) {
  const fetcher = async (url) => {
    const response =  await fetch(url);
    return await response.json();
  }

  const { data, error, isLoading } = useSWR(link, fetcher, {fallbackData: []});

  return {data, isLoading, error};
}

export default useGetMovieInfo;
