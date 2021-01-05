import React from "react";
import * as api from '../api/RationalResponseApi';
import { RationalResponse } from "../interfaces/RationalResponse";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "../components/styled/Input";
import Typography from '@material-ui/core/Typography';
import { Paper, Container } from '../components/styled/Layout';
import { StyledLink } from "../components/styled/Navigation";
import { Grid } from "@material-ui/core";

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
        return <div><StyledLink to={`/exercises/rational-response/${value.id}`}>ID: {value.id}</StyledLink></div>
    });

    return <div>
        <Paper>
            <Container><Typography variant="h4">Rational Response</Typography></Container>

            <Grid container spacing={3}>
                <Grid xs={3}><StyledLink to="/exercises/rational-response/new"><Button>Create new</Button></StyledLink></Grid>
                <Grid xs={9}>
                    <Typography variant="h5">Log</Typography>
                    {responseLinks}
                </Grid>
            </Grid>
        </Paper>
    </div>
}