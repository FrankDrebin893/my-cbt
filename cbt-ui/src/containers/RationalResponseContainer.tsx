import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RationalResponseExercise, RationalResponseProps } from './RationalResponseExercise';
import { RationalResponse, RationalResponseEntry } from "../interfaces/RationalResponse";
import * as rationalResponseApi from '../api/rationalResponseApi';

export const RationalResponseContainer = (props: any) => {
    let { id }: any = useParams<any>();
    const [rationalResponseState, setRationalResponseState] = React.useState<RationalResponse>();

    React.useEffect(() => {
        if (id) {
            rationalResponseApi.getRationalResponseById(id, "")
                .then(value => {
                    setRationalResponseState(value);
                });
        }
    }, [])

    const saveExercise = (values: Array<RationalResponseEntry>) => {
        rationalResponseApi.postRationalResponse({ Entries: values }, "");
    }

    var responseProps: RationalResponseProps = {
        ResponseId: rationalResponseState?.id,
        Responses: rationalResponseState?.entries,
        saveExercise
    };

    return <RationalResponseExercise key={responseProps.ResponseId} {...responseProps} />
}