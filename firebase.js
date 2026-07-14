import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";


import { getAuth } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


import { getFirestore } 
from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// Firebase Configuration

const firebaseConfig = {

    apiKey: "AIzaSyD3ubMdCyz8FrXFpBGJNz7nHuCxAEYqI9w",

    authDomain: "famesms-23e17.firebaseapp.com",

    projectId: "famesms-23e17",

    storageBucket: "famesms-23e17.firebasestorage.app",

    messagingSenderId: "749215030285",

    appId: "1:749215030285:web:0453bb888eba85c2e4c944",

    measurementId: "G-F1YKMVT827"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Firebase Services

const auth = getAuth(app);

const db = getFirestore(app);


// Export Services

export { auth, db };
