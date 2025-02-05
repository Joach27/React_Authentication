import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = () => {
    const { token } = useAuth();

    //If the token is present, render the children (the component that is wrapped by the ProtectedRoute)
    //Otherwise, redirect to the login page
    return token ? <Outlet /> : <Navigate to="/login" />;
}