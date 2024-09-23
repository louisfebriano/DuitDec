function toggleForm() {
  const $container = $(".container");
  const $h2 = $container.find("h2");
  const $form = $container.find("form");
  const $switchText = $container.find(".switch");
  const $image = $container.find(".ads-img"); 

  if ($h2.text() === "Login") {
    $h2.text("Register");
    $form.html(`
                    <input type="text" placeholder="Full Name" required>
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Password" required>
                    <input type="password" placeholder="Confirm Password" required>
                    <button type="button" onclick="register()">Register</button>
                `);
    $switchText.html(
      'Already have an account? <a href="#" onclick="toggleForm()">Login</a>'
    );
    
    $image.hide();
  } else {
    $h2.text("Login");
    $form.html(`
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Password" required>
                    <button type="button" onclick="login()">Login</button>
                `);
    $switchText.html(
      'Don\'t have an account? <a href="#" onclick="toggleForm()">Register</a>'
    );
    
    $image.show();
  }
}

function login() {
  const email = $('input[type="email"]').val();
  const password = $('input[type="password"]').val();

  if (email === "" || password === "") {
    alert("Please fill out both fields.");
    return;
  }
  window.location.href = "/pages/dashboard.html"; 
}

function register() {
  const fullName = $('input[placeholder="Full Name"]').val();
  const email = $('input[placeholder="Email"]').val();
  const password = $('input[placeholder="Password"]').val();
  const confirmPassword = $('input[placeholder="Confirm Password"]').val();

  if (email === "" || password === "" || confirmPassword === "" || fullName === "") {
    alert("Please fill out all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  window.location.href = "/pages/dashboard.html"; 
}