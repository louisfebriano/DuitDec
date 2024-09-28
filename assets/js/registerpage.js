function register() {
  const fullName = $('input[placeholder="Full Name"]').val();
  const email = $('input[placeholder="Email"]').val();
  const password = $('input[placeholder="Password"]').val();
  const confirmPassword = $('input[placeholder="Confirm Password"]').val();

  if (
    fullName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill out all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  window.location.href = "/pages/loginpage.html";
}
