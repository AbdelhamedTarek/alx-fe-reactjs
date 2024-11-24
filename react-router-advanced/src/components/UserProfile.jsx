// src/components/UserProfile.jsx
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams(); // Fetch dynamic user ID
  return <h3>User Profile for User ID: {userId}</h3>;
};

export default UserProfile;
