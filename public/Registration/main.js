const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Basic validation (can be improved)
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Simulate sending data (replace with actual backend integration)
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`); // Don't log password in real applications

  alert('Registration successful!');
});
