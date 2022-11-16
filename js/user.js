const url = new URL(window.location.href);
const urlParams = url.searchParams;

const userTitle = document.querySelector(".user-display-title");

function setTimeload() {
  if (!localStorage.getItem("name")) {
    localStorage.setItem("name", urlParams.get("username"));
    userTitle.innerHTML = localStorage.getItem("name");
    //   localStorage.removeItem("name");
  } else if (localStorage.getItem("name") === "") {
    userTitle.innerHTML = "";
  } else if (localStorage.getItem("name") === "null") {
    userTitle.innerHTML = "";
  } else if (localStorage.getItem("name")) {
    userTitle.innerHTML = localStorage.getItem("name");
  }
}

window.addEventListener("load", setTimeload);

setTimeout(setTimeload, 1);
