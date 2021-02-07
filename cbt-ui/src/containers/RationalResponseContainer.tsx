import React from "react";
import { useParams } from "react-router-dom";
import { RationalResponseExercise, RationalResponseProps } from './RationalResponseExercise';
import { RationalResponse, RationalResponseEntry } from "../interfaces/RationalResponse";
import * as rationalResponseApi from '../api/RationalResponseApi';
import { useAuth0 } from '@auth0/auth0-react';

export const RationalResponseContainer = (props: any) => {
    let { id }: any = useParams<any>();
    const [rationalResponseState, setRationalResponseState] = React.useState<RationalResponse>();
    const { getAccessTokenSilently, user } = useAuth0();

    React.useEffect(() => {
        if (id) {
            getAccessTokenSilently({ audience: process.env.REACT_APP_BACKEND_BASE_URI }).then((token) =>
                rationalResponseApi.getRationalResponseById(id, token)
                    .then(value => {
                        setRationalResponseState(value);
                    }));
        }
    }, [getAccessTokenSilently, id])

    const saveExercise = (values: Array<RationalResponseEntry>) => {
        return getAccessTokenSilently({ audience: process.env.REACT_APP_BACKEND_BASE_URI })
            .then((token) => rationalResponseApi.postRationalResponse({ Entries: values, UserId: user.sub }, token))
            .catch(reason => {
                console.log("Failed:", reason);
            });
    }

    var responseProps: RationalResponseProps = {
        ResponseId: rationalResponseState?.id,
        Responses: rationalResponseState?.entries,
        saveExercise
    };

    return <RationalResponseExercise key={responseProps.ResponseId} {...responseProps} />
}