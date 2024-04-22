// // Simulate some cart items (replace with actual data fetching)
// const cartItems = [
//     { id: 1, name: "Green Rain Jacket - $35", price: 29.99, image: "pic5.png" },
//     { id: 2, name: "Motorcycle Jacket - $35", price: 49.99, image: "pic6.png" },
//   ];
  
//   // Function to calculate total price
//   function calculateTotalPrice() {
//     let totalPrice = 0;
//     for (const item of cartItems) {
//       totalPrice += item.price;
//     }
//     return totalPrice.toFixed(2);
//   }
  
//   // Function to display cart items
//   function displayCartItems() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     cartItemsContainer.innerHTML = ''; // Clear previous content
  
//     for (const item of cartItems) {
//       const cartItem = document.createElement('div');
//       cartItem.classList.add('cart-item');
  
//       const image = document.createElement('img');
//       image.src = item.image; // Replace with actual image path
//       cartItem.appendChild(image);
  
//       const name = document.createElement('h3');
//       name.textContent = item.name;
//       cartItem.appendChild(name);
  
//       // Add functionality for quantity and remove button (optional)
  
//       cartItemsContainer.appendChild(cartItem);
//     }
//   }
  
//   // Display cart items and total price
//   displayCartItems();
//   const totalPriceElement = document.getElementById('total-price');
//   totalPriceElement.textContent = calculateTotalPrice();
  
//   // **Note:** This is a basic example. Implement logic to:
//   // 1. Fetch cart items from local storage or backend.
//   // 2. Handle quantity updates and item removal.
//   // 3. Implement checkout functionality. 

// Simulate some cart items (replace with actual data fetching)
const cartItems = [
    { id: 1, name: "Product 1", price: 29.99, image: "pic5.png", quantity: 1 }, // Added quantity property
    { id: 2, name: "Product 2", price: 49.99, image: "pic6.png", quantity: 2 }, // Added quantity property
  ];
  
  // Function to calculate total price
  function calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity; // Consider quantity in price calculation
    }
    return totalPrice.toFixed(2);
  }
  
  // Function to display cart items
  function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous content
  
    for (const item of cartItems) {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
  
      const image = document.createElement('img');
      image.src = item.image;
      cartItem.appendChild(image);
  
      const details = document.createElement('div');
      details.classList.add('cart-item-details'); // New class for details
  
      const name = document.createElement('h3');
      name.textContent = item.name;
      details.appendChild(name);
  
      const quantityPrice = document.createElement('p');
      quantityPrice.textContent = `Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}`;
      details.appendChild(quantityPrice);
  
      // Add functionality for quantity updates and remove button (optional)
  
      cartItem.appendChild(details);
      cartItemsContainer.appendChild(cartItem);
    }
  }
  
  // Display cart items and total price
  displayCartItems();
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = calculateTotalPrice();
  
  