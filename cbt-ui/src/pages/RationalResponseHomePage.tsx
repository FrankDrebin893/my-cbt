import React from "react";
import * as api from '../api/RationalResponseApi';
import { RationalResponse } from "../interfaces/RationalResponse";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "../components/styled/Input";
import Typography from '@material-ui/core/Typography';
import { Paper, Container } from '../components/styled/Layout';
import { StyledLink } from "../components/styled/Navigation";
import { Grid } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

    var previousLinks = rationalResponseState.map((value) => {
        return <TableRow>
            <TableCell align="right">{value.id}</TableCell>
            <TableCell align="right">{value.createdDate?.toISOString()}</TableCell>
            <TableCell align="right">{value.entries.length}</TableCell>
        </TableRow>
    });

    const table =
        <Table>
            <TableHead>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Created date</TableCell>
                <TableCell align="right">Entry count</TableCell>
            </TableHead>
            <TableBody>
                {previousLinks}
            </TableBody>
        </Table>;        

    return <div>
        <Typography variant="h4">Rational Response</Typography>
        <StyledLink to="/exercises/rational-response/new"><Button color={"primary"}>Create new</Button></StyledLink>
        <Typography variant="h5">Log</Typography>
        {table}
    </div>
}