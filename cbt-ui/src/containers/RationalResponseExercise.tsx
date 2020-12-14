import React from "react";
import { Button, Input } from "../components/styled/Input";
import { Box, Grid, GridHeader, GridItem } from "../components/styled/Layout";
import { RationalResponseEntry } from "../interfaces/RationalResponse";

export function RationalResponseExercise(props: RationalResponseProps) {
    const [exerciseState, setExerciseState] = React.useState<Array<RationalResponseEntry>>(props.Responses ?? []);
    const [statementState, setStatementState] = React.useState<string>("");
    const [responseState, setResponseState] = React.useState<string>("");
    const pushNewExercise = (response: RationalResponseEntry) => {
        console.log("Setting state", response);
        setExerciseState([...exerciseState, response]);
    }
    let statementInput = React.useRef<HTMLInputElement>(null);
    let responseInput = React.useRef<HTMLInputElement>(null);

    const pushNew = () => {
        pushNewExercise({ statement: statementState, response: responseState });
        setStatementState("");
        setResponseState("");
        focusStatementInput();
    };

    

    const focusStatementInput = () => {
        if (statementInput && statementInput.current) {
            statementInput.current.focus();
        }
    }

    React.useEffect(() => {
        focusStatementInput();
    }, [statementInput]);

    React.useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                pushNew();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    let previousStatements = exerciseState.map((response: RationalResponseEntry, index) => {
        return <React.Fragment key={"entry" + index}>
            <GridItem key={"statement" + index}>{response.statement}</GridItem>
            <GridItem key={"response" + index}>{response.response}</GridItem>
        </React.Fragment>
    })

    return (
        <div>
            <Grid columns={2}>
                <GridHeader>Statement</GridHeader>
                <GridHeader>Response</GridHeader>
                {previousStatements}
            </Grid>
            <Grid columns={2}>
                <GridItem><Input style={{width: "95%"}} onChange={(e) => setStatementState(e.target.value)} ref={statementInput} value={statementState} type="text" /></GridItem>
                <GridItem><Input style={{width: "95%"}} onChange={(e) => setResponseState(e.target.value)} ref={responseInput} value={responseState} type="text" /></GridItem>
            </Grid>
            <div>
                <Box><Button onClick={pushNew}>Enter</Button></Box>
                <Box><Button onClick={() => props.saveExercise(exerciseState)}>Save</Button></Box>
            </div>
        </div>
    )
}

export interface RationalResponseProps {
    Responses?: Array<RationalResponseEntry>;
    saveExercise(values: Array<RationalResponseEntry>): void;
    ResponseId?: number;
}

