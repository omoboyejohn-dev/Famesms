import { auth } from "./firebase.js";

import {
sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();

    if (!email) {
        alert("Please enter your email address.");
        return;
    }

    try {

        await sendPasswordResetEmail(auth, email);

        alert("Password reset link has been sent. Please check your email.");

        window.location.href = "login.html";

    } catch (error) {

        switch (error.code) {

            case "auth/user-not-found":
                alert("No account exists with this email.");
                break;

            case "auth/invalid-email":
                alert("Please enter a valid email address.");
                break;

            case "auth/too-many-requests":
                alert("Too many requests. Please try again later.");
                break;

            default:
                alert(error.message);

        }

    }

});
