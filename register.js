import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const form = document.getElementById("registerForm");


form.addEventListener("submit", async (e) => {

    e.preventDefault();


    const fullname = document
    .getElementById("fullname")
    .value
    .trim();


    const email = document
    .getElementById("email")
    .value
    .trim();


    const password = document
    .getElementById("password")
    .value;


    const confirmPassword = document
    .getElementById("confirmPassword")
    .value;



    if(password !== confirmPassword){

        alert("Passwords do not match.");

        return;

    }



    try{


        const userCredential = 
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user = userCredential.user;



        await setDoc(
            doc(db,"users",user.uid),
            {

                fullname,

                email,

                wallet:0,

                currency:"NGN",

                createdAt:serverTimestamp()

            }
        );



        alert("FameSMS account created successfully!");



        window.location.href="dashboard.html";



    }catch(error){


        alert(error.message);


    }


});
