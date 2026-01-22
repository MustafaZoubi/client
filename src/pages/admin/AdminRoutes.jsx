import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function AdminRoute({ children }) {
    const { auth } = useContext(AuthContext);

    if (!auth?.token) {
        return <Navigate to="/login" />;
    }

    if (auth.user?.role !== "admin") {
        return <Navigate to="/" />;
    }

    return children;
}
