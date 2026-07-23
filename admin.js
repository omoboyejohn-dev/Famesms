import { db } from "./firebase.js";

import {
collection,
getDocs,
doc,
getDoc,
updateDoc,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

async function loadDashboard() {

    const usersSnapshot = await getDocs(collection(db, "users"));

    document.getElementById("totalUsers").innerText =
    usersSnapshot.size;

    let wallet = 0;

    usersSnapshot.forEach((user) => {

        wallet += Number(user.data().wallet || 0);

    });

    document.getElementById("totalWallet").innerText =
    "₦" + wallet.toLocaleString();

    const depositSnapshot =
    await getDocs(collection(db, "depositRequests"));

    const table =
    document.getElementById("depositTable");

    table.innerHTML = "";

    let pending = 0;

    depositSnapshot.forEach((deposit) => {

        const data = deposit.data();

        if (data.status === "Pending") {

            pending++;

            table.innerHTML += `
            <tr>

                <td>${data.email}</td>

                <td>₦${Number(data.amount).toLocaleString()}</td>

                <td>${data.reference}</td>

                <td>${data.status}</td>

                <td>

                    <button
                    class="approve-btn"
                    onclick="approveDeposit('${deposit.id}','${data.uid}',${data.amount})">

                    Approve

                    </button>

                </td>

            </tr>
            `;

        }

    });

    document.getElementById("pendingDeposits").innerText =
    pending;

    if (pending === 0) {

        table.innerHTML = `
        <tr>

            <td colspan="5" style="text-align:center;">

            No pending deposits.

            </td>

        </tr>
        `;

    }

}

window.approveDeposit = async function (depositId, uid, amount) {

    const userRef = doc(db, "users", uid);

    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {

        alert("User not found");

        return;

    }

    const wallet =
    Number(userSnap.data().wallet || 0);

    // Update wallet
    await updateDoc(userRef, {

        wallet: wallet + Number(amount)

    });

    // Save transaction history
    await addDoc(collection(db, "transactions"), {

        uid: uid,

        type: "Wallet Deposit",

        amount: Number(amount),

        status: "Completed",

        createdAt: serverTimestamp()

    });

    // Update deposit status
    const depositRef =
    doc(db, "depositRequests", depositId);

    await updateDoc(depositRef, {

        status: "Completed"

    });

    alert("Wallet credited successfully.");

    loadDashboard();

};

loadDashboard();

document
.getElementById("refreshBtn")
.addEventListener("click", loadDashboard);
