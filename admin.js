const addProductForm = document.getElementById('addProductForm');

// Add product to Firestore
addProductForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('productName').value;
  const description = document.getElementById('productDescription').value;
  const price = document.getElementById('productPrice').value;

  await db.collection('products').add({
    name,
    description,
    price
  });

  alert('Product added successfully!');
  addProductForm.reset();
});
