import React from "react";
import { Notification } from '../styled/Feedback';

export const Snackbar = (props: SnackbarProps) => {
    console.log("Props:", props);
    return <Notification open={props.open}>{props.message}</Notification>
}

export interface SnackbarProps {
    open: boolean;
    message: string;
    style: "Warning" | "Info" | "Error" | "Success"
}