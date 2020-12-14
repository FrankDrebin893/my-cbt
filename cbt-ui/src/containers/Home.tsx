import React from "react";
import { Snackbar } from "../components/feedback/Snackbar";

export const Home = () => {
    console.log("Home");
    
    return <div><Snackbar open={true} message={"I'm a test"} style={"Info"} />Home</div>
}