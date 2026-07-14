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


const logoutBtn = document.querySelector(".logout");


if(logoutBtn){

    logoutBtn.addEventListener("click",(e)=>{

        e.preventDefault();


        signOut(auth)
        .then(()=>{

            window.location.href="login.html";

        })
        .catch((error)=>{

            console.log(error.message);

        });


    });

}

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");


menuBtn.addEventListener("click",()=>{

    sidebar.classList.toggle("show");

});

// Mobile Menu

const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const sidebar = document.getElementById("sidebar");


mobileMenuBtn.addEventListener("click",()=>{


    sidebar.classList.toggle("show");


});
