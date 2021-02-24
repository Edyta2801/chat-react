import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAVxrN9dXXFdJjQM7iqWc6B1iys5Tpr5_k",
    authDomain: "chat-react-7bc2f.firebaseapp.com",
    projectId: "chat-react-7bc2f",
    storageBucket: "chat-react-7bc2f.appspot.com",
    messagingSenderId: "855997607449",
    appId: "1:855997607449:web:abe270b32886c982a4c488",
    measurementId: "G-FRS45HWPV3"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;
