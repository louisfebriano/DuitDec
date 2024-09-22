function toggleForm() {
  const container = document.querySelector(".container");
  const h2 = container.querySelector("h2");
  const form = container.querySelector("form");
  const switchText = container.querySelector(".switch");
  const image = container.querySelector(".ads-img"); 

  if (h2.textContent === "Login") {
    h2.textContent = "Register";
    form.innerHTML = `
                    <input type="text" placeholder="Full Name" required>
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Password" required>
                    <input type="password" placeholder="Confirm Password" required>
                    <button type="button" onclick="register()">Register</button>
                `;
    switchText.innerHTML =
      'Already have an account? <a href="#" onclick="toggleForm()">Login</a>';
    
    image.style.display = 'none';
  } else {
    h2.textContent = "Login";
    form.innerHTML = `
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Password" required>
                    <button type="button" onclick="login  ()">Login</button>
                `;
    switchText.innerHTML =
      'Don\'t have an account? <a href="#" onclick="toggleForm()">Register</a>';
    
    image.style.display = 'block';
  }
}

function login() {
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (email === "" || password === "") {
      alert("Please fill out both fields.");
      return;
  }
  window.location.href = "/pages/dashboard.html"; 
}

function register() {
  const fullName = document.querySelector('input[placeholder="Full Name"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const password = document.querySelector('input[placeholder="Password"]').value;
  const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

  if (email === "" || password === ""|| confirmPassword === "" || fullName === "") {
      alert("Please fill out both fields.");
      return;
  }

  if (password !== confirmPassword) {
    alert("Passwords does not match.");
    return;
  }
  window.location.href = "/pages/login_page.html"; 
}
