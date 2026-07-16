import { auth } from "./firebase.js";

import {
sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const btn = document.getElementById("resetBtn");

btn.addEventListener("click", async () => {

const email = document.getElementById("email").value.trim();

if(!email){

alert("Please enter your email.");

return;

}

try{

await sendPasswordResetEmail(auth,email);

alert("Password reset link sent successfully. Check your email.");

window.location.href="login.html";

}catch(error){

switch(error.code){

case "auth/user-not-found":

alert("No account found with this email.");

break;

case "auth/invalid-email":

alert("Invalid email address.");

break;

default:

alert(error.message);

}

}

});
