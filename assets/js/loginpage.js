function login() {
  const email = $('input[placeholder="Email"]').val();
  const password = $('input[placeholder="Password"]').val();

  if (email === "" || password === "") {
    alert("Please fill out both fields.");
    return;
  }

  window.location.href = "/pages/dashboard.html";
}
