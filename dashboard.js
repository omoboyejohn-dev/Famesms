import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



// Check User Login

onAuthStateChanged(auth, async (user)=>{


    if(!user){

        window.location.href="login.html";

        return;

    }



    const userRef = doc(db,"users",user.uid);


    const userSnap = await getDoc(userRef);



    if(userSnap.exists()){


        const data = userSnap.data();



        document.querySelector(".user").innerHTML =
        "👤 " + data.username;



        document.querySelector(".wallet-balance").innerHTML =
        "₦" + data.wallet;



    }



});





// Logout


document.querySelector(".logout").onclick = ()=>{


    signOut(auth)
    .then(()=>{

        window.location.href="login.html";

    });


};
