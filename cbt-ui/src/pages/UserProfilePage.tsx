import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from '../components/styled/Layout';

export const UserProfilePage = () => {
    const { user } = useAuth0();

    return (
        <Container>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </Container>
    );
};