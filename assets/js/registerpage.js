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
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill out both fields!",
  });
  return; 
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password does not matched",
  });
  return; 
  }

  window.location.href = "/pages/loginpage.html";
}
