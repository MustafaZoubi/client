import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(() => {
        const stored = localStorage.getItem("auth");
        return stored
            ? JSON.parse(stored)
            : { user: null, token: null };
    });

    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);

    const login = (data) => {
        setAuth({
            user: data.user,
            token: data.token,
        });
    };

    const logout = () => {
        setAuth({ user: null, token: null });
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
