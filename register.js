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

    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const referral = document.getElementById("referral").value.trim();

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            fullname,
            username,
            email,
            country,
            referral,
            wallet: 0,
            currency: "NGN",
            createdAt: serverTimestamp()
        });

        const loading = document.getElementById("loadingScreen");
        const text = document.getElementById("loadingText");

        if (loading && text) {
            loading.style.display = "flex";
            text.innerHTML =
                "Account created successfully!<br>Setting up your account...";
        }

        setTimeout(() => {
            window.location.href = "welcome.html";
        }, 3000);

    } catch (error) {

        console.error(error);

        alert(error.code + "\n\n" + error.message);

    }

});
