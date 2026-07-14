import { auth } from "./firebase.js";

const selectedCountry = localStorage.getItem("selectedCountry");

document.getElementById("countryTitle").textContent = selectedCountry;

const countryServices = {

"🇲🇽 Mexico":[

{name:"Google / YouTube",price:1500},
{name:"Instagram",price:1500},
{name:"Skout",price:1500},
{name:"Snapchat",price:2000},
{name:"Tinder",price:1500},
{name:"Plenty of Fish (POF)",price:1500},
{name:"Facebook",price:2000}

],

"🇧🇷 Brazil":[

{name:"Skout",price:1500},
{name:"Snapchat",price:2000},
{name:"Telegram",price:2500},
{name:"Tinder",price:1500},
{name:"Plenty of Fish (POF)",price:1500},
{name:"Facebook",price:2000}

],

"🇪🇸 Spain":[

{name:"WhatsApp",price:7500},
{name:"Telegram",price:7500},
{name:"Signal",price:2500},
{name:"Plenty of Fish (POF)",price:1500},
{name:"Skout",price:1500},
{name:"Tinder",price:1500},
{name:"Snapchat",price:2000},
{name:"Instagram",price:2000},
{name:"Google / YouTube",price:1500}

],

"🇮🇳 India":[

{name:"Facebook",price:1200},
{name:"Instagram",price:960},
{name:"TikTok",price:1500},
{name:"Snapchat",price:1250},
{name:"Plenty of Fish (POF)",price:1500},
{name:"Tinder",price:1500},
{name:"Skout",price:1500}

],

"🇨🇦 Canada":[

{name:"WhatsApp",price:3000},
{name:"Telegram",price:2800},
{name:"Facebook",price:900},
{name:"Instagram",price:850},
{name:"Google",price:1000},
{name:"Snapchat",price:950},
{name:"Tinder",price:850}

],

"🇺🇸 USA":[

{name:"WhatsApp",price:4000},
{name:"Telegram",price:2800},
{name:"Instagram",price:1500},
{name:"Facebook",price:1500},
{name:"Skout",price:1500},
{name:"Plenty of Fish (POF)",price:1500},
{name:"Tinder",price:1500},
{name:"Snapchat",price:1500},
{name:"TikTok",price:1500},
{name:"Twitter",price:1500},
{name:"Viber",price:1500},
{name:"Skype",price:1500}

],

"🇮🇩 Indonesia":[

{name:"WhatsApp",price:3500},
{name:"Telegram",price:1800},
{name:"Facebook",price:1350},
{name:"Instagram",price:2000},
{name:"Google",price:960},
{name:"Skout",price:1100},
{name:"Snapchat",price:1350},
{name:"Tinder",price:950},
{name:"Plenty of Fish (POF)",price:1500}

],

"🇬🇧 England":[

{name:"WhatsApp",price:3500},
{name:"Telegram",price:2450},
{name:"Skout",price:1500},
{name:"Plenty of Fish (POF)",price:1500},
{name:"Instagram",price:1500},
{name:"Facebook",price:1500},
{name:"Tinder",price:1500},
{name:"Snapchat",price:950},
{name:"Google / YouTube",price:1100},
{name:"PayPal",price:1350}

],

"🇵🇭 Philippines":[

{name:"WhatsApp",price:4000},
{name:"Telegram",price:3600},
{name:"Snapchat",price:1800},
{name:"Tinder",price:1350},
{name:"Plenty of Fish (POF)",price:1350},
{name:"Instagram",price:1500},
{name:"Facebook",price:1500},
{name:"Twitter",price:1500}

],

"🇿🇦 South Africa":[

{name:"Google / YouTube",price:1000},
{name:"Instagram",price:1200},
{name:"Skout",price:950},
{name:"Tinder",price:950},
{name:"Plenty of Fish (POF)",price:950},
{name:"Facebook",price:950},
{name:"Twitter",price:950}

]

};

const servicesGrid = document.getElementById("servicesGrid");
const serviceSearch = document.getElementById("serviceSearch");

function formatPrice(price){
    return "₦" + price.toLocaleString();
}

function displayServices(list){

    servicesGrid.innerHTML = "";

    if(list.length === 0){

        servicesGrid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:40px;">
                No services found.
            </div>
        `;

        return;
    }

    list.forEach(service=>{

        servicesGrid.innerHTML += `

        <div class="service-card">

            <h3>${service.name}</h3>

            <div class="price">${formatPrice(service.price)}</div>

            <button
                class="buy-btn"
                onclick="buyNumber('${service.name}', ${service.price})">

                Buy Number

            </button>

        </div>

        `;

    });

}

const services = countryServices[selectedCountry] || [];

displayServices(services);

serviceSearch.addEventListener("input",()=>{

    const keyword = serviceSearch.value.toLowerCase();

    const filtered = services.filter(service=>
        service.name.toLowerCase().includes(keyword)
    );

    displayServices(filtered);

});

window.buyNumber = function(service, price){

    if(!auth.currentUser){

        alert("Please login first.");

        window.location.href = "login.html";

        return;

    }

    alert(
`Country: ${selectedCountry}

Service: ${service}

Price: ${formatPrice(price)}

Wallet deduction and number allocation will be connected when we integrate the 5SIM API.`
    );

};
