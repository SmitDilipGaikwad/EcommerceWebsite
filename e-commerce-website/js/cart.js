// cart.js

// Initialize an empty cart array to store cart items
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
  // Check if the product already exists in the cart
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If the product already exists, increase its quantity
    existingProduct.quantity += 1;
  } else {
    // If it's a new product, add it to the cart with a quantity of 1
    cart.push({ ...product, quantity: 1 });
  }

  // Save the cart data to local storage
  saveCartToLocalStorage();
}

// Function to update the quantity of a product in the cart
function updateCartItemQuantity(productId, quantity) {
  // Find the product in the cart
  const productToUpdate = cart.find((item) => item.id === productId);

  if (productToUpdate) {
    // Update the quantity of the product
    productToUpdate.quantity = quantity;

    // Save the cart data to local storage
    saveCartToLocalStorage();
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  // Filter out the product to be removed from the cart
  cart = cart.filter((item) => item.id !== productId);

  // Save the cart data to local storage
  saveCartToLocalStorage();
}

// Function to clear the entire cart
function clearCart() {
  cart = [];

  // Save the cart data to local storage
  saveCartToLocalStorage();
}

// Function to calculate the total cart value
function calculateTotal() {
  let total = 0;

  // Loop through cart items and calculate the total value
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  return total;
}

// Function to save cart data to local storage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to load cart data from local storage
function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem("cart");

  if (cartData) {
    cart = JSON.parse(cartData);
  }
}

// Load cart data from local storage when the script is executed
loadCartFromLocalStorage();

// Export the functions to use in other parts of the application
export {
  cart,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
  calculateTotal,
};
