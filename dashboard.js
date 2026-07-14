import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



// Check Login

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

            document.getElementById("username").textContent =
                data.username || user.email;

            document.getElementById("walletBalance").textContent =
                "₦" + (data.wallet || 0).toFixed(2);

        } else {

            document.getElementById("username").textContent =
                user.email;

            document.getElementById("walletBalance").textContent =
                "₦0.00";

        }

    } catch (error) {

        console.error(error);

    }

});



// Logout Function

async function logoutUser() {

    try {

        await signOut(auth);

        window.location.href = "login.html";

    } catch (error) {

        alert(error.message);

    }

}



// Top Logout Button

document.getElementById("logoutBtn").addEventListener("click", logoutUser);



// Bottom Logout Button

document.getElementById("bottomLogout").addEventListener("click", function(e){

    e.preventDefault();

    logoutUser();

});



// Refresh Button

document.getElementById("refreshBtn").addEventListener("click", () => {

    location.reload();

});

// Recent Activations (Temporary)

const activationTable = document.getElementById("activationTable");

function loadActivations() {

    activationTable.innerHTML = `

        <tr>

            <td colspan="6" style="text-align:center;padding:30px;color:#b8c0d4;">

                No recent activations.

                <br><br>

                Purchase an SMS number to see your activations here.

            </td>

        </tr>

    `;

}

loadActivations();
