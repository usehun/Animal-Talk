const channel = document.querySelector(".channel-flex");
const userSlider = document.querySelector(".user-slider");
const arrow = document.querySelector(".arrow");

function onClick() {
  arrow.classList.toggle("arrow-rotate");

  if (!userSlider.classList.contains("user-YsliderIn")) {
    userSlider.classList.toggle("user-YsliderIn");
    userSlider.classList.remove("user-YsliderOut");
  } else if (userSlider.classList.contains("user-YsliderIn")) {
    userSlider.classList.toggle("user-YsliderOut");
    userSlider.classList.remove("user-YsliderIn");
  }
}

channel.addEventListener("click", onClick);
