import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        // Si le user est connecter alors le bouton login est cacher 
        !isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>
            Log In
        </button>
        )
    )
}

export default LoginButton
