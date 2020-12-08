import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from './styled/Lib';

export const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    if (isAuthenticated)
        return <span>
            <img style={{ maxHeight: "100%", marginLeft: "15px", marginRight: "15px" }} src={user.picture} alt={user.name} /> Logged in <Button onClick={() => logout()}>Log Out</Button></span>;

    let redirectUri = `${window.location.origin}`;
    return <Button onClick={() => loginWithRedirect({ audience: process.env.REACT_APP_BACKEND_BASE_URI, redirectUri })}>Log In</Button>;
};