import React from "react";
import { Link, Route } from "react-router-dom";
import { RationalResponseIcon } from "../components/styled/Icons";
import { Grid, GridHeader, GridItem } from "../components/styled/Layout";
import { RationalResponseExercise } from "../containers/RationalResponseExercise";

export const ExercisesReferencePage = () => {
    return (
        <div>
            <h1>Exercises</h1>
            <h2>Select the exercise you want to do</h2>
            <Grid columns={5}>
                <GridHeader>Rational Response</GridHeader>
                <GridHeader>Expectation scheme</GridHeader>
                <GridHeader>Journal</GridHeader>
                <GridHeader>Journal</GridHeader>
                <GridHeader>Journal</GridHeader>
                <Link to="exercises/rational-response"><GridItem><img style={{ maxWidth: "20%", maxHeight: "20%" }} src={"/icons/png/001-chat.png"} /></GridItem></Link>
                <GridItem><img style={{ maxWidth: "20%", maxHeight: "20%" }} src={"/icons/png/001-chat.png"} /></GridItem>
                <Link to="journal"><GridItem><img style={{ maxWidth: "20%", maxHeight: "20%" }} src={"/icons/png/001-chat.png"} /></GridItem></Link>
                <GridItem><img style={{ maxWidth: "20%", maxHeight: "20%" }} src={"/icons/png/001-chat.png"} /></GridItem>
                <GridItem><img style={{ maxWidth: "20%", maxHeight: "20%" }} src={"/icons/png/001-chat.png"} /></GridItem>
            </Grid>

        </div>);
}