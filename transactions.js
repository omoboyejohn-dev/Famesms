import { auth, db } from "./firebase.js";

import {
collection,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

auth.onAuthStateChanged(async(user)=>{

if(!user){

window.location.href="login.html";

return;

}

const q = query(

collection(db,"transactions"),

where("uid","==",user.uid)

);

const snapshot = await getDocs(q);

const table = document.getElementById("transactionTable");

table.innerHTML="";

if(snapshot.empty){

table.innerHTML=`

<tr>

<td colspan="4" style="text-align:center;">

No transactions yet.

</td>

</tr>

`;

return;

}

snapshot.forEach((doc)=>{

const data = doc.data();

table.innerHTML += `

<tr>

<td>${data.type}</td>

<td>₦${Number(data.amount).toLocaleString()}</td>

<td>${data.status}</td>

<td>${data.createdAt?.toDate().toLocaleString() || "-"}</td>

</tr>

`;

});

});
