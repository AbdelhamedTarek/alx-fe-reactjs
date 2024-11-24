import React from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Fetching posts with React Query
  const { data, error, isLoading, isError, isFetching, isSuccess, refetch } =
    useQuery(
      ["posts"], // Query key
      fetchPosts,
      {
        keepPreviousData: true, // Keeps old data visible while new data is being fetched
        cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
        staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
        refetchOnWindowFocus: true, // Refetch when the window is refocused
      }
    );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {isFetching && <div>Refreshing data...</div>}

      <button onClick={refetch}>Refetch Posts</button>

      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
