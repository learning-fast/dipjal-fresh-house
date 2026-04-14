// PRODUCTS
const products = [
    {
        name: "Chicken Boiler 🐔",
        price: "Rs. 450/kg",
        image: "chickenboiler.jpg"
    },
    {
        name: "Mutton 🐐",
        price: "Rs. 1200/kg",
        image: "goatmeat.jpg"
    },
    {
        name: "Chicken Giriraj 🐔",
        price: "Rs. 750/kg",
        image: "giriraj.jpg"
    }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;

    productList.appendChild(div);
});

// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));

    index++;
    if (index >= slides.length) index = 0;

    slides[index].classList.add("active");
}

setInterval(showSlide, 3000);

// WHATSAPP DIRECT MESSAGE
function orderNow() {
    let message = "Hello Dipjal Fresh House! I want to order:\n";

    products.forEach(p => {
        message += "- " + p.name + "\n";
    });

    let phone = "9816112125"; 

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
