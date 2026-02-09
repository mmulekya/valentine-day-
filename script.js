const container = document.getElementById("container");
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

signupBtn.onclick = () => {
  container.classList.add("active");
};

loginBtn.onclick = () => {
  container.classList.remove("active");
};
let startX = 0;
let endX = 0;

const containerEl = document.getElementById("container");

containerEl.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

containerEl.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX - endX > 50) {
    // swipe left → signup
    containerEl.classList.add("active");
  }

  if (endX - startX > 50) {
    // swipe right → login
    containerEl.classList.remove("active");
  }
}
