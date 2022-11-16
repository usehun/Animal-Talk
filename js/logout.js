const logout = document.querySelector(".setting-logout");

function onClickLogout() {
  localStorage.removeItem("name");
  console.log("gi");
}

logout.addEventListener("click", onClickLogout);
