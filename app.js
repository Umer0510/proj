// Fetch products from Firestore and display them on the homepage
const productList = document.getElementById('product-list');

db.collection('products').get().then(snapshot => {
  snapshot.forEach(doc => {
    const product = doc.data();
    productList.innerHTML += `
      <div class="product-item">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button onclick="location.href='product.html?id=${doc.id}'">View Details</button>
      </div>
    `;
  });
});
