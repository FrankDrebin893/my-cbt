import React from "react";
import { useLocation } from "react-router-dom";
import { RationalResponse } from "./RationalResponseExercise";

export const RationalResponseContainer = () => {
    let location = useLocation();
    
    const saveExercise = (values: Array<RationalResponse>) => {
        var id = Math.random();
        localStorage.setItem(`exercise-id-${id}`, JSON.stringify(values));
    }
}