const container = document.getElementById("container");
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

signupBtn.onclick = () => {
  container.classList.add("active");
};

loginBtn.onclick = () => {
  container.classList.remove("active");
};
