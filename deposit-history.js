import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

async function loadHistory(){

const snapshot = await getDocs(collection(db,"depositRequests"));

const table = document.getElementById("historyTable");

table.innerHTML = "";

if(snapshot.empty){

table.innerHTML = `

<tr>

<td colspan="6" style="text-align:center;">

No deposit history found.

</td>

</tr>

`;

return;

}

snapshot.forEach((deposit)=>{

const data = deposit.data();

let statusColor = "";

if(data.status==="Completed"){

statusColor = "🟢 Completed";

}else if(data.status==="Rejected"){

statusColor = "🔴 Rejected";

}else{

statusColor = "🟡 Pending";

}

let date = "";

if(data.createdAt){

date = data.createdAt.toDate().toLocaleString();

}

table.innerHTML += `

<tr>

<td>${data.email}</td>

<td>₦${Number(data.amount).toLocaleString()}</td>

<td>${data.sender}</td>

<td>${data.reference}</td>

<td>${statusColor}</td>

<td>${date}</td>

</tr>

`;

});

}

loadHistory();
