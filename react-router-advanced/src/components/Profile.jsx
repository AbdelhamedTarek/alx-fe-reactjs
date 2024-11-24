// src/components/Profile.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const ProfileDetails = () => <h3>Profile Details</h3>;
const ProfileSettings = () => <h3>Profile Settings</h3>;

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> |
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
