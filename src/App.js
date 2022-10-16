import React from "react";
import Login from "./components/Login";
import Chats from "./components/Chats";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AuthContext from "./context/AuthContext";

function App() {
    return (
        <div className="App">
            <AuthContext>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/chats" element={<Chats />} />
                    {/* <Route path="*" element={<Navigate to="/" />} /> */}
                </Routes>
            </AuthContext>
        </div>
    );
}

export default App;
