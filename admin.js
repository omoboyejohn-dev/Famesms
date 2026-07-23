import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

async function loadDashboard(){

    // Total Users
    const usersSnapshot = await getDocs(collection(db,"users"));

    document.getElementById("totalUsers").innerText =
    usersSnapshot.size;

    // Total Wallet
    let wallet = 0;

    usersSnapshot.forEach((doc)=>{

        wallet += Number(doc.data().wallet || 0);

    });

    document.getElementById("totalWallet").innerText =
    "₦" + wallet.toLocaleString();

    // Deposit Requests
    const depositSnapshot =
    await getDocs(collection(db,"depositRequests"));

    document.getElementById("pendingDeposits").innerText =
    depositSnapshot.size;

    const table =
    document.getElementById("depositTable");

    table.innerHTML = "";

    if(depositSnapshot.empty){

        table.innerHTML = `
        <tr>
            <td colspan="5" style="text-align:center">
                No pending requests.
            </td>
        </tr>
        `;

        return;

    }

    depositSnapshot.forEach((doc)=>{

        const data = doc.data();

        table.innerHTML += `
        <tr>

            <td>${data.email}</td>

            <td>₦${Number(data.amount).toLocaleString()}</td>

            <td>${data.reference}</td>

            <td>${data.status}</td>

            <td>

                <button class="approve-btn">
                    Approve
                </button>

                <button class="reject-btn">
                    Reject
                </button>

            </td>

        </tr>
        `;

    });

}

loadDashboard();

document.getElementById("refreshBtn")
.addEventListener("click",loadDashboard);
