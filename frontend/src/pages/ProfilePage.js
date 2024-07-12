// src/components/Profile.js
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [profile, setProfile] = useState({
    email: user?.email || "",
    name: user?.name || "",
    picture: user?.picture || "",
    additionalInfo: "", // Example additional profile information
  });

  useEffect(() => {
    // Fetch the additional profile information from your backend
    if (user) {
      fetch(`/api/profile/${user.sub}`)
        .then(response => response.json())
        .then(data => setProfile(data))
        .catch(error => console.error("Error fetching profile:", error));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your backend API to update the profile
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      // Handle successful profile update
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={profile.picture} alt={profile.name} />
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="picture">Picture URL:</label>
            <input
              type="text"
              id="picture"
              value={profile.picture}
              onChange={(e) => setProfile({ ...profile, picture: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="additionalInfo">Additional Info:</label>
            <input
              type="text"
              id="additionalInfo"
              value={profile.additionalInfo}
              onChange={(e) => setProfile({ ...profile, additionalInfo: e.target.value })}
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    )
  );
};

export default Profile;
