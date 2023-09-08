import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import Logout from './logoutButton';

function UserProfile() {
    const {user, isAuthenticated, isLoading, getIdTokenClaims} = useAuth0();

    useEffect(() => {
      const fetchToken = async () => {
          if (isAuthenticated) {
              try {
                  const tokenClaims = await getIdTokenClaims();
                  const idToken = tokenClaims.__raw;
                  console.log("ID Token:", idToken);
              } catch (error) {
                  console.error("Error fetching ID token claims:", error);
              }
          }
      };

      fetchToken();
  }, [isAuthenticated, getIdTokenClaims]);
    
    if(isLoading) {
      return <div>Loading!</div>
  }

  return (
    isAuthenticated && (
        <div>
            <h2>Welcome, {user.name}</h2>
            <p>{user.email}</p>
            <Logout />
        </div>
    )
  )
}

export default UserProfile