import React from "react";
import { ResponseBody, ResponseInput, SubmitResponseButton } from '../components/exercises/RationalResponse';

export function RationalResponseExercise(props: any) {
    const [exerciseState, setExerciseState] = React.useState<Array<RationalResponse>>([]);
    const [statementState, setStatementState] = React.useState<string>("");
    const [responseState, setResponseState] = React.useState<string>("");

    const pushNewExercise = (response: RationalResponse) => {
        setExerciseState([...exerciseState, response]);
    }

    let previousStatements = exerciseState.map((response) => {
        return <div>
            <span>{response.statement}</span>
            <span>{response.reply}</span>
        </div>
    })

    return (
        <ResponseBody>
            {previousStatements}
            <ResponseInput onChange={(e) => setStatementState(e.target.value)} type="text" />
            <ResponseInput onChange={(e) => setResponseState(e.target.value)} type="text" />
            <div><SubmitResponseButton onClick={() => pushNewExercise({ statement: statementState, reply: responseState })}>Enter</SubmitResponseButton></div>
        </ResponseBody>)
}

interface RationalResponse {
    statement: string;
    reply: string;
}