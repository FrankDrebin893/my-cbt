import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginHandler = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    let { redirectUri }: any = useParams<any>();
    console.log("Login stuff:", user, isAuthenticated, isLoading, redirectUri);
    const [accessToken, setAccessToken] = React.useState<string>();

    React.useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently().then((token) => {
                console.log("Token:", token);
                setAccessToken(token);
            });
        }
    });

    if (accessToken) {
        return <Redirect to={redirectUri} />
    }

    return <div>Loading...</div>;
}