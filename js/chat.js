let count = document.querySelectorAll(".chat-count");
let total = document.querySelector(".total");

let a = 0;
for (i = 0; count.length - 1 > i; i++) {
  count[i].innerHTML = Math.ceil(Math.random() * 150);

  a = a + parseInt(count[i].innerHTML);

  if (a >= 300) {
    total.innerHTML = "300+";
  } else {
    total.innerHTML = a;
  }
}

localStorage.setItem("count", a);
