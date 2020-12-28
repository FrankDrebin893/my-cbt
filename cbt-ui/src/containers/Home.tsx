import React from "react";
import { Snackbar } from "../components/feedback/Snackbar";
import { Paper } from "../components/styled/Layout";

export const Home = () => {
    console.log("Home");
    
    return <Paper><Snackbar open={true} message={"I'm a test"} style={"Info"} />Home</Paper>
}