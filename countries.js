import { auth } from "./firebase.js";

const countries = [

    { name: "🇲🇽 Mexico" },
    { name: "🇧🇷 Brazil" },
    { name: "🇪🇸 Spain" },
    { name: "🇮🇳 India" },
    { name: "🇨🇦 Canada" },
    { name: "🇺🇸 USA" },
    { name: "🇮🇩 Indonesia" },
    { name: "🇬🇧 England" },
    { name: "🇵🇭 Philippines" },
    { name: "🇿🇦 South Africa" }

];

const countriesGrid = document.getElementById("countriesGrid");
const countrySearch = document.getElementById("countrySearch");

function displayCountries(list){

    countriesGrid.innerHTML = "";

    list.forEach(country => {

        countriesGrid.innerHTML += `

        <div class="country-card">

            <h3>${country.name}</h3>

            <button
                class="buy-btn"
                onclick="openCountry('${country.name}')">

                View Services

            </button>

        </div>

        `;

    });

}

displayCountries(countries);

countrySearch.addEventListener("input", () => {

    const keyword = countrySearch.value.toLowerCase();

    const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(keyword)
    );

    displayCountries(filtered);

});

window.openCountry = function(country){

    localStorage.setItem("selectedCountry", country);

    window.location.href = "country-services.html";

};
