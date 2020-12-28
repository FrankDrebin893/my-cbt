import React from "react";
import { useParams } from "react-router-dom";
import { RationalResponseExercise, RationalResponseProps } from './RationalResponseExercise';
import { RationalResponse, RationalResponseEntry } from "../interfaces/RationalResponse";
import * as RationalResponseApi from "../api/RationalResponseApi";

export const RationalResponseContainer = (props: any) => {
    let { id }: any = useParams<any>();
    const [rationalResponseState, setRationalResponseState] = React.useState<RationalResponse>();

    React.useEffect(() => {
        if (id) {
            RationalResponseApi.getRationalResponseById(id, "")
                .then(value => {
                    setRationalResponseState(value);
                });
        }
    }, [])

    const saveExercise = (values: Array<RationalResponseEntry>) => {
        RationalResponseApi.postRationalResponse({ Entries: values }, "");
    }

    var responseProps: RationalResponseProps = {
        ResponseId: rationalResponseState?.id,
        Responses: rationalResponseState?.entries,
        saveExercise
    };

    return <RationalResponseExercise key={responseProps.ResponseId} {...responseProps} />
}