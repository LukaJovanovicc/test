const btn = document.getElementById("hamburger");
const sideBar = document.getElementById("side-bar");
const btnClose = document.getElementById("close");

btn.addEventListener("click", () => {
  sideBar.style.display = "block";
});
btnClose.addEventListener("click", () => {
  sideBar.style.display = "none";
});
