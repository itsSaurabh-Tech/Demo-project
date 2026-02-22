let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").textContent = total;
    document.getElementById("cart-count").textContent = cart.length;

    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let name = card.getAttribute("data-name").toLowerCase();
        if(name.includes(input)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

updateCart();
