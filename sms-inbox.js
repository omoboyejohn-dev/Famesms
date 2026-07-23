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

    loadSMS(user.uid);

});

async function loadSMS(uid){

    const table = document.getElementById("smsTable");

    table.innerHTML = "";

    const q = query(
        collection(db, "orders"),
        where("uid", "==", uid)
    );

    const snapshot = await getDocs(q);

    if(snapshot.empty){

        table.innerHTML = `

        <tr>

            <td colspan="5" style="text-align:center;">

            No SMS received yet.

            </td>

        </tr>

        `;

        return;

    }

    snapshot.forEach((order)=>{

        const data = order.data();

        let sms = "";
        let status = "";

        if(data.smsCode && data.smsCode !== ""){

            sms = `<span class="sms-code">${data.smsCode}</span>`;
            status = "✅ Received";

        }else{

            sms = `<span class="waiting">Waiting...</span>`;
            status = "🟡 Waiting";

        }

        let date = "";

        if(data.createdAt){

            date = data.createdAt.toDate().toLocaleString();

        }

        table.innerHTML += `

        <tr>

            <td>${data.service}</td>

            <td>${data.number}</td>

            <td>${sms}</td>

            <td>${status}</td>

            <td>${date}</td>

        </tr>

        `;

    });

}
