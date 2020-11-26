import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RationalResponse, RationalResponseExercise, RationalResponseProps } from './RationalResponseExercise';

export const RationalResponseContainer = (props: any) => {
    let location = useLocation();
    let { id }:any = useParams<any>();

    let json = localStorage.getItem(`exercise-id-${id}`);
    let existingAnswers: Array<RationalResponse> = [];
    
    if(json != null)
        existingAnswers = JSON.parse(json);
    
    const saveExercise = (values: Array<RationalResponse>) => {
        if (id == null)
            id = Math.floor(Math.random() * 100);
        localStorage.setItem(`exercise-id-${id}`, JSON.stringify(values));
    }

    var responseProps: RationalResponseProps = {
        ResponseId: id,
        Responses: existingAnswers,
        saveExercise
    };
    
    return <RationalResponseExercise {...responseProps}  />
}