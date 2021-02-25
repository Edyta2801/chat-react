import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDA7HlmekMypvEMdWX6Cq-PycoNSx3N_zc",
    authDomain: "chat-c3e05.firebaseapp.com",
    databaseURL: "https://chat-c3e05-default-rtdb.firebaseio.com",
    projectId: "chat-c3e05",
    storageBucket: "chat-c3e05.appspot.com",
    messagingSenderId: "267688742437",
    appId: "1:267688742437:web:b4ee52c3a9ce49c974f9cc"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;
