import React from "react";
import { Link } from "react-router-dom";
import * as api from '../api/RationalResponseApi';
import { RationalResponse } from "../interfaces/RationalResponse";

export const RationalResponseHome = () => {
    const [rationalResponseState, setRationalResponseState] = React.useState<Array<RationalResponse>>([])
    React.useEffect(() => {
        api.getRationalResponses("")
            .then((responses) => {
                console.log("Values:", responses);
                setRationalResponseState(responses);
            });

    }, []);

    var responseLinks = rationalResponseState.map((value) => {
        return <div><Link to={`/exercises/rational-response/${value.id}`}>ID: {value.id}</Link></div>
    })

    return <div>
        Previous exercises:
        {responseLinks}
    </div>
}