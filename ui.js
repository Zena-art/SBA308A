import { deleteProduct, updateProduct } from './api.js';

// Render products in a table
export function renderProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ''; // Clear the current list

  products.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.title}</td>
      <td>${product.description}</td>
      <td>${product.price}</td>
      <td>
        <button class="deleteBtn" data-id="${product.id}">Delete</button>
        <button class="updateBtn" data-id="${product.id}">Update</button>
      </td>
    `;
    productList.appendChild(row);
  });

  // Attach event listeners for delete and update buttons
  attachEventListeners();
}

// Attach event listeners to handle delete and update actions
function attachEventListeners() {
  document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const productId = e.target.getAttribute('data-id');
      await deleteProduct(productId);
      e.target.closest('tr').remove(); // Optimistically remove from UI
    });
  });

  document.querySelectorAll('.updateBtn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const productId = e.target.getAttribute('data-id');
      const updatedData = { title: 'Updated Title' }; // Example update data
      await updateProduct(productId, updatedData);
      alert('Product updated successfully!');
    });
  });
}
