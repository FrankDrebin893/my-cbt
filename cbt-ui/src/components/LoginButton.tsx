import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../components/styled/Input";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if (isAuthenticated) {
        return <span>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <img style={{ maxHeight: "30px", borderRadius: '20px' }} src={user.picture} alt={user.name} />
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
            <Button color={"secondary"} onClick={() => logout()}>Log Out</Button>
        </span>;
    }

    let redirectUri = `${window.location.origin}`;
    return <Button onClick={() => loginWithRedirect({ audience: process.env.REACT_APP_BACKEND_BASE_URI, redirectUri })}>Log In</Button>;
};