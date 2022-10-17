import React from "react";
import styles from "../assets/css/Navbar.module.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate("/simple-chat/");
    };

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <h2>Simple-Chat</h2>
            </div>

            <div className={styles.logout} onClick={() => handleLogout()}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;
