import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { setAuthToken } from '../store/auth/types';

export const LoginHandler = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    let { redirectUri }: any = useParams<any>();
    console.log("Login stuff:", user, isAuthenticated, isLoading, redirectUri);
    const [accessToken, setAccessToken] = React.useState<string>();

    const dispatch = useDispatch();
    React.useEffect(() => {
        if (isAuthenticated) {
            console.log("Getting token silently");
            getAccessTokenSilently().then((token) => {
                console.log("Token:", token);
                setAccessToken(token);
                console.log("Dispatching token");
                dispatch(setAuthToken(token));
            });
        }
    });

    if (accessToken) {
        return <Redirect to={redirectUri} />
    }

    return <div>Loading...</div>;
}