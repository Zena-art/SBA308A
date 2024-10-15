const apiUrl = 'https://dummyjson.com/products';

// Fetch products with pagination
export async function getProducts(page = 1, limit = 5) {
  const response = await fetch(`${apiUrl}?page=${page}&limit=${limit}`);
  const data = await response.json();
  return data.products; // Return the products
}

// Search for products by title
export async function searchProducts(query) {
  const response = await fetch(`${apiUrl}/search?q=${query}`);
  const data = await response.json();
  return data.products; // Return the search results
}

// Delete a product
export async function deleteProduct(productId) {
  const response = await fetch(`${apiUrl}/${productId}`, {
    method: 'DELETE',
  });
  return response.ok; // Return true if delete was successful
}

// Update a product
export async function updateProduct(productId, updatedData) {
  const response = await fetch(`${apiUrl}/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  return response.ok; // Return true if update was successful
}
