const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.querySelector(".cart-items");
const cartTotal = document.querySelector("#cart-total");

function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    cartTotal.innerText = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Checkout action
document.querySelector("#checkout").addEventListener("click", () => {
    alert("Redirecting to checkout...");
    localStorage.removeItem("cart");
    displayCart();
});

displayCart();
