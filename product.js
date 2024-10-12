// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch and display product details
const productInfo = document.getElementById('product-info');

db.collection('products').doc(productId).get().then(doc => {
  const product = doc.data();
  productInfo.innerHTML = `
    <h1>${product.name}</h1>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
  `;
});

// Add to cart functionality
function addToCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}
