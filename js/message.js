const lastMessage = document.querySelector(".guest-messsage");
const guestMessage = document.querySelectorAll(".user-display-subtitle");

let message = [];
for (i = 0; guestMessage.length > i; i++) {
  message.push(guestMessage[i].innerHTML);

  console.log(message);
}
