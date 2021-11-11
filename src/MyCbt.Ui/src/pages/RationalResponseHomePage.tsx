import React from "react";
import * as api from '../api/RationalResponseApi';
import { RationalResponse } from "../interfaces/RationalResponse";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "../components/styled/Input";
import Typography from '@material-ui/core/Typography';
import { StyledLink, TableRowLink } from "../components/styled/Navigation";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
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
        return (
            <TableRow key={"tr" + value.id}>
                <TableRowLink to={`exercises/${value.id}`}>
                    <TableCell align="right">{new Date(value.createdDate).toDateString()}</TableCell>
                    <TableCell align="right">{value.entries.length}</TableCell>
                </TableRowLink>
            </TableRow>)
    });

    const table =
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="right">Created date</TableCell>
                    <TableCell align="right">Entry count</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {previousLinks}
            </TableBody>
        </Table>;

    return <div>
        <Typography variant="h4">Rational Response</Typography>
        <StyledLink to="/exercises/rational-response/new"><Button color={"primary"}>Create new</Button></StyledLink>
        <Typography variant="h5">Previous exercises</Typography>
        {table}
    </div>
}