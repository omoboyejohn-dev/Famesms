import { auth, db } from "./firebase.js";

import {
collection,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    loadTransactions(user.uid);

});

async function loadTransactions(uid){

    const table = document.getElementById("transactionTable");

    table.innerHTML = "";

    const q = query(
        collection(db, "transactions"),
        where("uid", "==", uid)
    );

    const snapshot = await getDocs(q);

    if(snapshot.empty){

        table.innerHTML = `

        <tr>

            <td colspan="4" style="text-align:center;">

            No transactions found.

            </td>

        </tr>

        `;

        return;

    }

    snapshot.forEach((transaction)=>{

        const data = transaction.data();

        let statusClass = "";

        if(data.status === "Completed"){

            statusClass = "status-completed";

        }else if(data.status === "Pending"){

            statusClass = "status-pending";

        }else{

            statusClass = "status-failed";

        }

        let date = "";

        if(data.createdAt){

            date = data.createdAt.toDate().toLocaleString();

        }

        table.innerHTML += `

        <tr>

            <td>${data.type}</td>

            <td>₦${Number(data.amount).toLocaleString()}</td>

            <td class="${statusClass}">${data.status}</td>

            <td>${date}</td>

        </tr>

        `;

    });

}
