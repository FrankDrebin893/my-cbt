import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styled/Input";
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

export const LoginWidget = () => {
    const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (isAuthenticated) {
        return isAuthenticated && (<span>
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
        </span>);
    } else {
        return <Button color={"secondary"} onClick={() => loginWithRedirect()}>Log In</Button>;
    }
};