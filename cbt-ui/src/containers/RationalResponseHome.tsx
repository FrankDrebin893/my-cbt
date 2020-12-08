import React from "react";
import { Link } from "react-router-dom";
import * as api from '../api/rationalResponseApi';
import { RationalResponse } from "../interfaces/RationalResponse";
import { useAuth0 } from '@auth0/auth0-react';

export const RationalResponseHome = () => {
    const [rationalResponseState, setRationalResponseState] = React.useState<Array<RationalResponse>>([])
    const { getAccessTokenSilently } = useAuth0();

    React.useEffect(() => {
        getAccessTokenSilently({audience: process.env.REACT_APP_BACKEND_BASE_URI})
            .then((token) => {
                console.log("Token", token);
                api.getRationalResponses(token)
                    .then((responses) => {
                        console.log("Values:", responses);
                        setRationalResponseState(responses);
                    })
            }
            );

    }, []);

    var responseLinks = rationalResponseState.map((value) => {
        return <div><Link to={`/exercises/rational-response/${value.id}`}>ID: {value.id}</Link></div>
    })

    return <div>
        Previous exercises:
        {responseLinks}
    </div>
}