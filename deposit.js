import { auth, db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const form = document.getElementById("depositForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user = auth.currentUser;

    if (!user) {
        alert("Please login first.");
        window.location.href = "login.html";
        return;
    }

    const amount = document.getElementById("amount").value.trim();
    const sender = document.getElementById("sender").value.trim();
    const reference = document.getElementById("reference").value.trim();

    if (!amount || !sender || !reference) {
        alert("Please fill in all fields.");
        return;
    }

    try {

        await addDoc(collection(db, "depositRequests"), {

            uid: user.uid,
            email: user.email,

            amount: Number(amount),

            sender: sender,

            reference: reference,

            status: "Pending",

            createdAt: serverTimestamp()

        });

        alert(
`FameSMS says

After payment, your wallet will be credited automatically.

If your wallet balance is not updated within 10 minutes, please contact support.`
        );

        form.reset();

    } catch (error) {

        alert("Error: " + error.message);

    }

});
