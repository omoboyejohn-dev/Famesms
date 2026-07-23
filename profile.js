import { auth, db } from "./firebase.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    try {

        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {

            const data = userSnap.data();

            document.getElementById("fullname").textContent =
                data.fullname || "Not Available";

            document.getElementById("username").textContent =
                data.username || "Not Available";

            document.getElementById("email").textContent =
                data.email || user.email;

            document.getElementById("country").textContent =
                data.country || "Not Available";

            document.getElementById("wallet").textContent =
                "₦" + Number(data.wallet || 0).toLocaleString();

        }

    } catch (error) {

        alert("Error loading profile: " + error.message);

    }

});

document.getElementById("logoutBtn")
.addEventListener("click", async () => {

    if (confirm("Are you sure you want to logout?")) {

        await signOut(auth);

        window.location.href = "login.html";

    }

});
