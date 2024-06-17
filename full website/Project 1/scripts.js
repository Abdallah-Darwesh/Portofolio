const bar = document.getElementById('bar');
const nav =document.getElementById('navbar');
const close =document.getElementById('close');
if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


// const product = [
//     {
//         i:0,
//         image :'img/products/f1.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:1,
//         image :'img/products/f2.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:2,
//         image :'img/products/f3.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:4,
//         image :'img/products/f5.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:5,
//         image :'img/products/f6.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:6,
//         image :'img/products/f7.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:7,
//         image :'img/products/f8.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:8,
//         image :'img/products/n1.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:9,
//         image :'img/products/n2.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:10,
//         image :'img/products/n3.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:11,
//         image :'img/products/n4.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:12,
//         image :'img/products/n5.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:13,
//         image :'img/products/n6.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:14,
//         image :'img/products/n7.jpg',
//         title:'T-shirt',
//         price:78,
//     },
//     {
//         i:15,
//         image :'img/products/n8.jpg',
//         title:'T-shirt',
//         price:78,
//     },

// ]
// const btn = document.getElementById('addToCartBtn');
// const cart = document.getElementById('cart');

// if (btn){
//     btn.addEventListener('click',()=>{
//         cart.classList.add('active');
//         document.ht
//     })
// }

document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
    document.getElementById("clearCartBtn").addEventListener("click", clearCart);
});

function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    var cartItemsContainer = document.getElementById("cartItems");
    var totalPrice = 0;

    cartItemsContainer.innerHTML = "";

    cartItems.forEach(function (item) {
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
        <div id="product-info">
        <img src="${item.image}" alt="${item.name}">
        <div id="pr-info">
            <h4>${item.name}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Size: ${item.size}</p>
            <p>Quantity: ${item.quantity}</p>
        </div>
        
        </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });

    document.getElementById("totalPrice").textContent = "$" + totalPrice.toFixed(2);
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCartItems();
}

document.getElementById('addToCartBtn').addEventListener('click', addToCart);

function addToCart() {
    var productName = document.querySelector('.single-pro-details h4').innerText;
    var productPrice = parseFloat(document.querySelector('.single-pro-details h2').innerText.replace('$', ''));
    var productSize = document.querySelector('.single-pro-details select').value;
    var quantity = parseInt(document.querySelector('.single-pro-details input').value);

    var cartItem = {
        image:"img/products/f1.jpg",
        name: productName,
        price: productPrice,
        size: productSize,
        quantity: quantity
    };

    // Retrieve existing cart items from local storage or initialize an empty array
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cartItems.push(cartItem);

    // Save the updated cart items back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Update the cart count in the header
    updateCartCount();
}

function updateCartCount() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('lg-bag').querySelector('span').innerText = cartCount;
}

