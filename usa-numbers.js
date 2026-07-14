import { auth } from "./firebase.js";

const services = [
  { name: "WhatsApp", price: 3500 },
{ name: "Telegram", price: 2760 },
{ name: "Snapchat", price: 1100 },
{ name: "Facebook", price: 2700 },
{ name: "TikTok", price: 2740 },
{ name: "Instagram", price: 1760 },
{ name: "Apple", price: 1760 },
{ name: "Badoo", price: 1900 },
{ name: "Bank of America", price: 1400 },
{ name: "Bank of Hawaii", price: 2100 },
{ name: "Bank of Washington", price: 2200 },
{ name: "BeReal", price: 1700 },
{ name: "Best Buy", price: 2000 },
{ name: "Bet365", price: 2500 },
{ name: "Bigo Live", price: 1800 },
{ name: "Binance", price: 2400 },
{ name: "Bitcoin ATM", price: 2300 },
{ name: "Bitcoin IRA", price: 2200 },
{ name: "Blockchain", price: 2100 },
{ name: "BMOHarris", price: 2000 },
{ name: "Bolt", price: 1800 },
{ name: "Boo", price: 1700 },
{ name: "BonChat", price: 1900 },
{ name: "Booking.com", price: 2400 },
{ name: "Bumble", price: 2300 },
{ name: "Bump", price: 1600 },
{ name: "Bunky", price: 1700 },
{ name: "Burner", price: 2200 },
{ name: "BurstSMS", price: 2000 },
{ name: "BuyOnTrust", price: 1900 },
{ name: "Call", price: 1500 },
{ name: "CallApp", price: 1800 },
{ name: "CallFire", price: 2000 },
{ name: "Capital One", price: 2500 },
{ name: "CARD.com", price: 2100 },
{ name: "CASH 1", price: 1700 },
{ name: "Cash Alarm", price: 1800 },
{ name: "Cash App", price: 2500 },
{ name: "Chat Date", price: 1900 },
{ name: "Chime", price: 2300 },
{ name: "Chispa", price: 2000 },
{ name: "CIT Bank", price: 2300 },
{ name: "CITGO", price: 1800 },
{ name: "Citibank", price: 2400 },
{ name: "City Fish", price: 1700 },
{ name: "CityBank", price: 2400 },
{ name: "Clapper", price: 1900 },
{ name: "Coinme", price: 2200 },
{ name: "Credit One Bank", price: 2500 },
{ name: "Crypto.com", price: 2400 },
  { name: "Currently From AT&T", price: 2000 },
{ name: "CVS", price: 1800 },
{ name: "Dave", price: 2100 },
{ name: "Discord", price: 2200 },
{ name: "Dollar General", price: 1900 },
{ name: "DoorDash", price: 2400 },
{ name: "Douyin", price: 2000 },
{ name: "Duet", price: 1700 },
{ name: "eBay", price: 2300 },
{ name: "Fiverr", price: 2400 },
{ name: "Flex Pay", price: 2000 },
{ name: "Gate.io", price: 2300 },
{ name: "Gemini", price: 2100 },
{ name: "Gemiplay", price: 1800 },
{ name: "GitHub", price: 2200 },
{ name: "Glovo", price: 2000 },
{ name: "Gmail", price: 1500 },
{ name: "Go2Bank", price: 2300 },
{ name: "GoBank", price: 2200 },
{ name: "GoDaddy", price: 2400 },
{ name: "Google", price: 2300 },
{ name: "Google Business Profile", price: 2500 },
{ name: "Google Chat", price: 2100 },
{ name: "Google Messenger", price: 2000 },
{ name: "Google Voice", price: 3000 },
{ name: "Go Payment", price: 2100 },
{ name: "Got2Go", price: 1900 },
{ name: "Fidelity Bank", price: 2400 },
{ name: "Green Dot", price: 2200 },
{ name: "Hily", price: 2000 },
{ name: "Hinge", price: 2300 },
{ name: "Hotmail", price: 1800 },
{ name: "ID.me", price: 2500 },
{ name: "Imo", price: 1700 },
{ name: "iMoney", price: 2100 },
{ name: "Index", price: 1800 },
{ name: "Instagram", price: 2500 },
{ name: "JanePay", price: 2000 },
{ name: "KakaoTalk", price: 2100 },
{ name: "Kalshi", price: 2400 },
{ name: "KARE", price: 1900 },
{ name: "Karrot", price: 2000 },
{ name: "Line", price: 2200 },
{ name: "Line 2", price: 2300 },
{ name: "Link", price: 1700 },
{ name: "LinkedIn", price: 2400 },
{ name: "Lyft", price: 2300 },
{ name: "Mail.com", price: 1800 },
{ name: "Mamba", price: 2000 },
{ name: "M&T Bank", price: 2500 },
  { name: "Mastercard", price: 2400 },
{ name: "MeetMe", price: 2100 },
{ name: "Mellow", price: 1900 },
{ name: "Microsoft Office", price: 2300 },
{ name: "Outlook", price: 1800 },
{ name: "Xbox", price: 2200 },
{ name: "MiniPay", price: 2100 },
{ name: "Mine", price: 1700 },
{ name: "MoneyGram", price: 2400 },
{ name: "Zoosk", price: 2000 },
{ name: "Zelle", price: 2500 },
{ name: "Yubo", price: 2100 },
{ name: "YouTube", price: 2300 },
{ name: "Yahoo", price: 1800 },
{ name: "Xbox", price: 2200 },
{ name: "X (Twitter)", price: 2450 },
{ name: "WorldRemit", price: 2400 },
{ name: "WooPlus", price: 2000 },
{ name: "Wink", price: 1900 },
{ name: "WhatsApp", price: 4500 },
{ name: "Whatnot", price: 2100 },
{ name: "WeTalk", price: 1900 },
{ name: "Western Union", price: 2500 },
{ name: "WePhone", price: 2000 },
{ name: "Wells Fargo", price: 2500 },
{ name: "WeChat Receives Only", price: 2200 },
{ name: "Walmart MoneyCard", price: 2400 },
{ name: "Walmart", price: 2300 },
{ name: "Vumber", price: 1900 },
{ name: "VNumber", price: 2000 },
{ name: "VK", price: 1800 },
{ name: "Viber", price: 2000 },
{ name: "Venmo", price: 2000 },
{ name: "USAA", price: 2400 },
{ name: "USA Survey", price: 1700 },
{ name: "US Bank", price: 2500 },
{ name: "Upward", price: 2000 },
{ name: "Twitter", price: 2450 },
{ name: "Twitch", price: 2200 },
{ name: "Twilio", price: 2300 },
{ name: "TurboTax", price: 2400 },
{ name: "Truth Social", price: 2100 },
{ name: "Truecaller", price: 2300 },
{ name: "True", price: 1900 },
{ name: "Tinder", price: 2400 },
{ name: "TikTok", price: 2400 },
{ name: "Threads", price: 2100 },
{ name: "Textr", price: 1800 },
{ name: "TextPlus", price: 2000 },
{ name: "Textline", price: 2100 },
  { name: "Textla", price: 1900 },
{ name: "TextFree", price: 2000 },
{ name: "Texas By Texas", price: 2300 },
{ name: "Tencent", price: 2400 },
{ name: "Temu", price: 2200 },
{ name: "Telz", price: 1800 },
{ name: "Telegram", price: 3500 },
{ name: "Target", price: 2300 },
{ name: "TanTan", price: 2100 },
{ name: "T-Mobile Money", price: 2500 },
{ name: "Steam", price: 2200 },
{ name: "Speed Wallet", price: 2000 },
{ name: "Spark", price: 1900 },
{ name: "Snapchat", price: 2100 },
{ name: "Skype", price: 2300 },
{ name: "Skout", price: 2200 },
{ name: "Signal", price: 2000 },
{ name: "Shopify", price: 2500 },
{ name: "Sephora", price: 2300 },
{ name: "Samsung", price: 2400 },
{ name: "Rocket", price: 1900 },
{ name: "Roblox", price: 2200 },
{ name: "River", price: 1800 },
{ name: "Ring4", price: 2100 },
{ name: "Revolut", price: 2500 },
{ name: "Reddit", price: 2000 },
{ name: "Raya", price: 2300 },
{ name: "Raza", price: 1900 },
{ name: "Plenty of Fish", price: 2200 },
{ name: "Phoner", price: 2100 },
{ name: "Peoples Bank", price: 2400 },
{ name: "PaySend", price: 2300 },
{ name: "PayPal", price: 2000 },
{ name: "Paxful", price: 2200 },
{ name: "Paga", price: 2000 },
{ name: "OutTime", price: 1800 },
{ name: "Outlook", price: 1800 },
{ name: "OkCupid", price: 2100 },
{ name: "Okta", price: 2400 },
{ name: "OKX", price: 2300 },
{ name: "Numero", price: 2200 },
{ name: "Netflix", price: 2500 },
{ name: "Meta", price: 2300 },
{ name: "Match.com", price: 2000 }
];

const servicesGrid = document.getElementById("servicesGrid");
const searchInput = document.getElementById("searchInput");

function formatPrice(price){
    return "₦" + price.toLocaleString();
}

function displayServices(list){

    servicesGrid.innerHTML = "";

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

displayServices(services);

searchInput.addEventListener("input", ()=>{

    const keyword = searchInput.value.toLowerCase();

    const filtered = services.filter(service =>
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
`Service: ${service}

Price: ${formatPrice(price)}

Wallet deduction and number allocation will be connected in the next step.`
    );

};
