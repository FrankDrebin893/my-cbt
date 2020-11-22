import React from "react";
import { Button, Input, Grid, GridItem, GridHeader } from '../components/styled/Lib';

export function RationalResponseExercise(props: RationalResponseProps) {
    const [exerciseState, setExerciseState] = React.useState<Array<RationalResponse>>(props.Responses);
    const [statementState, setStatementState] = React.useState<string>("");
    const [responseState, setResponseState] = React.useState<string>("");

    const pushNewExercise = (response: RationalResponse) => {
        setExerciseState([...exerciseState, response]);
    }

    /*let previousStatements = exerciseState.map((response) => {
        return <TableRow>
            <TableColumn>{response.statement}</TableColumn>
            <TableColumn>{response.reply}</TableColumn>
        </TableRow>
    })*/
    let previousStatements = exerciseState.map((response) => {
        return <>
            <GridItem>{response.statement}</GridItem>
            <GridItem>{response.reply}</GridItem>
        </>
    })

    return (
        <div>
            <Grid>
                <GridHeader>Statement</GridHeader>
                <GridHeader>Response</GridHeader>
                {previousStatements}
            </Grid>
            <Input onChange={(e) => setStatementState(e.target.value)} type="text" />
            <Input onChange={(e) => setResponseState(e.target.value)} type="text" />
            <div>
                <Button onClick={() => pushNewExercise({ statement: statementState, reply: responseState })}>Enter</Button>
            </div>
        </div>
    )
}

export interface RationalResponseProps {
    Responses: Array<RationalResponse>
}

export interface RationalResponse {
    statement: string;
    reply: string;
}