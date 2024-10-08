function login() {
  const email = $('input[placeholder="Email"]').val();
  const password = $('input[placeholder="Password"]').val();

  if (email === "" || password === "") {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill out both fields!",
      });
      return; 
  }

  window.location.href = "/pages/dashboard.html";
}