import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
    .initializeApp({
        apiKey: "AIzaSyBKUY2O0c3WVMR_YpNB-3haduTFJ86gCaA",
        authDomain: "simple-chat-baca6.firebaseapp.com",
        projectId: "simple-chat-baca6",
        storageBucket: "simple-chat-baca6.appspot.com",
        messagingSenderId: "1000845328058",
        appId: "1:1000845328058:web:e976463d11d1c291b7cc83",
    })
    .auth();
