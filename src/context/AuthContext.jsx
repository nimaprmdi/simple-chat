import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const AuthProvider = createContext({});

const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const navigation = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            console.log(user);
            setLoading(false);
            if (user) navigation("/simple-chat/chats");
        });
    }, [user, navigation]);

    return <AuthProvider.Provider value={user}>{!loading && children}</AuthProvider.Provider>;
};

export default AuthContext;
