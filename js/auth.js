const container = document.getElementById("container");

function showSignup() {
  container.classList.add("active");
}

function showLogin() {
  container.classList.remove("active");
}

function login() {
  window.location.href = "heart.html";
}
