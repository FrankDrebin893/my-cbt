import React from "react";
import { Link } from "react-router-dom";
import * as api from '../api/RationalResponseApi';
import { RationalResponse } from "../interfaces/RationalResponse";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "../components/styled/Input";
import Typography from '@material-ui/core/Typography';

export const RationalResponseHomePage = () => {
    const [rationalResponseState, setRationalResponseState] = React.useState<Array<RationalResponse>>([])
    const { getAccessTokenSilently } = useAuth0();

    React.useEffect(() => {
        getAccessTokenSilently({ audience: process.env.REACT_APP_BACKEND_BASE_URI })
            .then((token) => {
                console.log("Token", token);
                api.getRationalResponses(token)
                    .then((responses) => {
                        console.log("Values:", responses);
                        setRationalResponseState(responses);
                    })
            }
            );

    }, [getAccessTokenSilently]);

    var responseLinks = rationalResponseState.map((value) => {
        return <div><Link to={`/exercises/rational-response/${value.id}`}>ID: {value.id}</Link></div>
    });

    return <div>
        <Typography variant="h4">Rational Response</Typography>
        <div>
            <Link to="/exercises/rational-response/new"><Button>Create new</Button></Link>
        </div>
        <div>
            Previous exercises:
        {responseLinks}
        </div>
    </div>
}