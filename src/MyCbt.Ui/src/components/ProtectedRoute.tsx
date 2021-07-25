import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = (props: RouteProps) => {
    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return <Route {...props} />
    } else {
        return <div>You need to be logged in.</div>
    }
}

export default ProtectedRoute;