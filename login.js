import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    try {

        await setPersistence(
            auth,
            remember
                ? browserLocalPersistence
                : browserSessionPersistence
        );

        await signInWithEmailAndPassword(auth, email, password);

        // Show loading screen
document.getElementById("loadingScreen").style.display = "flex";

// Change loading message
document.getElementById("loadingText").innerHTML =
"Login successful!<br>Preparing your dashboard...";

// Redirect after 2.5 seconds
setTimeout(() => {

    window.location.href = "welcome.html";

}, 2500);
        
    } catch (error) {

        switch (error.code) {

            case "auth/invalid-credential":
                alert("Incorrect email or password.");
                break;

            case "auth/user-disabled":
                alert("This account has been disabled.");
                break;

            case "auth/too-many-requests":
                alert("Too many login attempts. Please try again later.");
                break;

            default:
                alert(error.message);

        }

    }

});
