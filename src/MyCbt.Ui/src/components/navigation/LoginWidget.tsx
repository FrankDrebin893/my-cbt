import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styled/Input";
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

export const LoginWidget = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    if (isAuthenticated === true) {
        return <span>
            <Link to="/profile">
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit">
                    <img style={{ maxHeight: "30px", borderRadius: '20px' }} src={user.picture} alt={user.name} />
                </IconButton>
            </Link>
            <Button color={"secondary"} onClick={() => logout()}>Log Out</Button>
        </span>;
    }

    let redirectUri = `${window.location.origin}`;
    return <Button color={"secondary"} onClick={() => loginWithRedirect({ audience: process.env.REACT_APP_BACKEND_BASE_URI, redirectUri })}>Log In</Button>;
};