import React from "react";
import { Button, Input, Grid, GridItem, GridHeader } from '../components/styled/Lib';

export function RationalResponseExercise(props: RationalResponseProps) {
    const [exerciseState, setExerciseState] = React.useState<Array<RationalResponse>>(props.Responses ?? []);
    const [statementState, setStatementState] = React.useState<string>("");
    const [responseState, setResponseState] = React.useState<string>("");
    const pushNewExercise = (response: RationalResponse) => {
        setExerciseState([...exerciseState, response]);
    }

    let previousStatements = exerciseState.map((response:RationalResponse) => {
        return <>
            <GridItem>{response.statement}</GridItem>
            <GridItem>{response.reply}</GridItem>
        </>
    })

    return (
        <div>
            <Grid columns={2}>
                <GridHeader>Statement</GridHeader>
                <GridHeader>Response</GridHeader>
                {previousStatements}
            </Grid>
            <Input onChange={(e) => setStatementState(e.target.value)} type="text" />
            <Input onChange={(e) => setResponseState(e.target.value)} type="text" />
            <div>
                <Button onClick={() => pushNewExercise({ statement: statementState, reply: responseState })}>Enter</Button>
            </div>
            <div><Button onClick={() => props.saveExercise(exerciseState)}>Save</Button></div>
        </div>
    )
}

export interface RationalResponseProps {
    Responses: Array<RationalResponse>;
    saveExercise(values: Array<RationalResponse>): void;
    ResponseId: string;
}

export interface RationalResponse {
    statement: string;
    reply: string;
}