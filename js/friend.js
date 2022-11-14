const url = new URL(window.location.href);
const urlParams = url.searchParams;

const userTitle = document.querySelector(".user-display-title");

if (!localStorage.getItem("name")) {
  localStorage.setItem("name", urlParams.get("username"));
  userTitle.innerHTML = localStorage.getItem("name");
  //   localStorage.removeItem("name");
} else if (localStorage.getItem("name")) {
  userTitle.innerHTML = localStorage.getItem("name");
}
// localStorage.setItem("name", urlParams.get("username"));
// console.log(!localStorage.getItem("name") === "");
