import React from "react";
import styles from "../assets/css/Login.module.css";
import firebase from "firebase/app";
import { auth } from "../firebase";
import { Icon } from "@iconify/react";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome To Simple-Chat</h2>

                <div
                    className={styles.button}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <Icon icon="flat-color-icons:google" />
                </div>
            </div>
        </div>
    );
};

export default Login;
