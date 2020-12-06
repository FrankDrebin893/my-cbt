import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RationalResponseExercise, RationalResponseProps } from './RationalResponseExercise';
import { RationalResponse, RationalResponseEntry } from "../interfaces/RationalResponse";
import * as rationalResponseApi from '../api/RationalResponseApi';

export const RationalResponseContainer = (props: any) => {
    let location = useLocation();
    let { id }: any = useParams<any>();

    const [rationalResponseState, setRationalResponseState] = React.useState<RationalResponse>();

    React.useEffect(() => {
        console.log("ID:", id);
        if (id) {
            rationalResponseApi.getRationalResponseById(id, "")
                .then(value => {
                    console.log("value:", value);
                    setRationalResponseState(value);
                });
        }
    }, [])

    const saveExercise = (values: Array<RationalResponseEntry>) => {
        console.log("Request:", { Entries: values });
        rationalResponseApi.postRationalResponse({ Entries: values }, "");
    }

    var responseProps: RationalResponseProps = {
        ResponseId: rationalResponseState?.id,
        Responses: rationalResponseState?.entries,
        saveExercise
    };

    return <RationalResponseExercise key={responseProps.ResponseId} {...responseProps} />
}