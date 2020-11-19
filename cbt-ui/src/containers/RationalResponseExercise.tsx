import React from "react";

export function RationalResponseExercise(props: any) {
    const [exerciseState, setExerciseState] = React.useState<Array<RationalResponse>>([]);
    const [statementState, setStatementState] = React.useState<string>("");
    const [responseState, setResponseState] = React.useState<string>("");

    const pushNewExercise = (response: RationalResponse) => {
        setExerciseState([...exerciseState, response]);
    }

    let previousStatements = exerciseState.map((response) => {
        return <div>
            <span style ={{marginRight:"50px"}}>{response.statement}</span>
            <span>{response.reply}</span>
        </div>
    })

    return (<div>
        {previousStatements}
        <input onChange={(e) => setStatementState(e.target.value)} type="text" style ={{marginRight:"50px"}} />
        <input onChange={(e) => setResponseState(e.target.value)} type="text" />
        <button onClick={() => pushNewExercise({ statement: statementState, reply: responseState})}>Enter</button>
    </div>)
}

interface RationalResponse {
    statement: string;
    reply: string;
}