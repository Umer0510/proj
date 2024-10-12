// Fetch cart items from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartList = document.getElementById('cart-list');

cart.forEach(productId => {
  db.collection('products').doc(productId).get().then(doc => {
    const product = doc.data();
    cartList.innerHTML += `
      <div class="cart-item">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
      </div>
    `;
  });
});

// Checkout functionality
function checkout() {
  alert('Checkout successful!');
}
