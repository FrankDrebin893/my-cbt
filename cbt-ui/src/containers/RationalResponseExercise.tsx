import React from "react";
import { Button, Input, Grid, GridItem, GridHeader } from '../components/styled/Lib';
import { RationalResponseEntry } from "../interfaces/RationalResponse";

export function RationalResponseExercise(props: RationalResponseProps) {
    const [exerciseState, setExerciseState] = React.useState<Array<RationalResponseEntry>>(props.Responses ?? []);
    const [statementState, setStatementState] = React.useState<string>("");
    const [responseState, setResponseState] = React.useState<string>("");
    const pushNewExercise = (response: RationalResponseEntry) => {
        setExerciseState([...exerciseState, response]);
    }

    let previousStatements = exerciseState.map((response:RationalResponseEntry) => {
        return <>
            <GridItem>{response.statement}</GridItem>
            <GridItem>{response.response}</GridItem>
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
                <Button onClick={() => pushNewExercise({ statement: statementState, response: responseState })}>Enter</Button>
            </div>
            <div><Button onClick={() => props.saveExercise(exerciseState)}>Save</Button></div>
        </div>
    )
}

export interface RationalResponseProps {
    Responses?: Array<RationalResponseEntry>;
    saveExercise(values: Array<RationalResponseEntry>): void;
    ResponseId?: number;
}

