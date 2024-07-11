import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    const fetchIdToken = async () => {
      if (isAuthenticated) {
        const idTokenClaims = await getIdTokenClaims();
        setIdToken(idTokenClaims.__raw); // __raw contains the actual JWT token
      }
    };

    fetchIdToken();
  }, [isAuthenticated, getIdTokenClaims]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
        {idToken && <p>ID Token: {idToken}</p>}
      </div>
    )
  );
};

export default Profile;