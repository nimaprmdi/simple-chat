import React, { useState, useEffect, useContext } from "react";
import styles from "../assets/css/Chats.module.css";
import Navbar from "./Navbar";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
import { AuthProvider } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Chats = () => {
    const [loading, setLoading] = useState(true);
    const user = useContext(AuthProvider);

    const navigation = useNavigate();

    useEffect(() => {
        console.log(user);

        if (!user) {
            navigation("/");
            return;
        }

        axios
            .get("https://api.chatengine.io/users/me/", {
                headers: {
                    "project-id": "6b924b2f-cdd3-49eb-9935-5d4973824224",
                    "user-name": user.email,
                    "user-secret": user.uid,
                },
            })
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.log("First Error", error);

                let formData = new FormData();
                formData.append("email", user.email);
                formData.append("username", user.email);
                formData.append("first_name", user.displayName);
                formData.append("secret", user.uid);
                getFile(user.photoURL).then((avatar) => {
                    formData.append("avatar", avatar, avatar.name);
                });

                axios
                    .post("https://api.chatengine.io/users/", formData, {
                        headers: {
                            "private-key": "private-key",
                            "project-id": "6b924b2f-cdd3-49eb-9935-5d4973824224",
                        },
                    })
                    .then(() => {
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log("Sec Error", error);
                    });
            });
    }, [user, navigation]);

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        console.log(new File([data], "userImage.jpg", { type: "image/jpeg" }));
        return new File([data], "userImage.jpg", { type: "image/jpeg" });
    };

    return (
        <div className={styles.container}>
            <Navbar />

            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="6b924b2f-cdd3-49eb-9935-5d4973824224"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;
