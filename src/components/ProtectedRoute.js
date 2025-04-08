import { useContext } from "react"
import { userContext } from "../Layout";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
    const {loggedIn, loading}= useContext(userContext);
    if (loading) return null;
    if (loggedIn)
        return children;
    else
        return <Navigate to="/" replace />;
}

export default ProtectedRoute;