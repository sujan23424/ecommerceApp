import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(() => {
        try {
            return initialAuthUser ? JSON.parse(initialAuthUser) : null;
        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
            return null;
        }
    });

    const updateAuthUser = (user) => {
        if (user) {
            localStorage.setItem("Users", JSON.stringify(user));
        } else {
            localStorage.removeItem("Users");
        }
        setAuthUser(user);
    };

    return (
        <AuthContext.Provider value={[authUser, updateAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
