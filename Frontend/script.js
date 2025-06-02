const products = [
    { id: 1, name: "Smartphone", price: 19999, image: "image/smartphone.jpg" },
    { id: 2, name: "Gaming Laptop", price: 59999, image: "image/laptop.jpg" },
    { id: 3, name: "Sneakers", price: 2999, image: "image/shoes.jpg" }
];

const productContainer = document.querySelector(".products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function updateCartCount() {
    document.querySelector("#cart-count").innerText = cart.length;
}

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>₹${product.price}</p>
        <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
    `;
    productContainer.appendChild(productCard);
});

updateCartCount();
