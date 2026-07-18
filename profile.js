import {
getAuth,
EmailAuthProvider,
reauthenticateWithCredential,
updatePassword
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import { app } from "./firebase.js";

const auth = getAuth(app);

const form = document.getElementById("passwordForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const currentPassword =
document.getElementById("currentPassword").value;

const newPassword =
document.getElementById("newPassword").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

if(newPassword!==confirmPassword){

message.style.color="red";
message.textContent="Passwords do not match.";
return;

}

const user=auth.currentUser;

if(!user){

location.href="login.html";
return;

}

try{

const credential=
EmailAuthProvider.credential(
user.email,
currentPassword
);

await reauthenticateWithCredential(
user,
credential
);

await updatePassword(
user,
newPassword
);

message.style.color="#00d4ff";
message.textContent="Password updated successfully.";

form.reset();

}catch(error){

message.style.color="red";
message.textContent=error.message;

}

});
