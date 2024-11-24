import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts from JSONPlaceholder
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // useQuery hook to fetch posts from the API
  const { data, error, isLoading, isError, refetch } = useQuery(
    ["posts"], // query key
    fetchPosts, // query function
    {
      // Options for caching, data freshness, and refetching
      staleTime: 5 * 60 * 1000, // Data will be fresh for 5 minutes
      cacheTime: 10 * 60 * 1000, // Cached data will live for 10 minutes
      refetchOnWindowFocus: false, // Disable refetch on window focus for this example
    }
  );

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>

      {/* Button to trigger refetch */}
      <button onClick={() => refetch()} style={{ marginBottom: "16px" }}>
        Refetch Posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
