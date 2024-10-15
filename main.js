import { getProducts, searchProducts } from './api.js';
import { renderProducts } from './ui.js';

let currentPage = 1;
const productsPerPage = 5;

// Initialize the application by fetching and displaying products
async function init() {
  const products = await getProducts(currentPage, productsPerPage);
  renderProducts(products);
}

// Handle pagination
document.getElementById('prevPage').addEventListener('click', async () => {
  if (currentPage > 1) {
    currentPage--;
    const products = await getProducts(currentPage, productsPerPage);
    renderProducts(products);
  }
});

document.getElementById('nextPage').addEventListener('click', async () => {
  currentPage++;
  const products = await getProducts(currentPage, productsPerPage);
  renderProducts(products);
});

// Handle search
document.getElementById('searchBtn').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value;
  const searchResults = await searchProducts(query);
  renderProducts(searchResults);
});

// Initialize the app
init();
