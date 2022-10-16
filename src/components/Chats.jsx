import React from "react";
import styles from "../assets/css/Chats.module.css";
import Navbar from "./Navbar";
import { ChatEngine } from "react-chat-engine";

const Chats = () => {
    return (
        <div className={styles.container}>
            <Navbar />

            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="6b924b2f-cdd3-49eb-9935-5d4973824224"
                userName="."
                userSecret=""
            />
        </div>
    );
};

export default Chats;
