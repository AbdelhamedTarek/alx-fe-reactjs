// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  // For now, we simulate fetching the blog post data
  const blogPosts = [
    {
      id: "1",
      title: "First Blog Post",
      content: "This is the first blog post content.",
    },
    {
      id: "2",
      title: "Second Blog Post",
      content: "This is the second blog post content.",
    },
  ];

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <h3>Post not found</h3>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
