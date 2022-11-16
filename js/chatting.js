const text = document.querySelector(".text");
const keyBoard = document.querySelector(".keyboard");
const chatScreen = document.querySelector(".chat-screen");

function onloadScreen() {
  const status = document.querySelector(".status-bar");

  status.classList.add(".bar-color");
}

window.addEventListener("load", onloadScreen);

function onSubmit(event) {
  event.preventDefault();

  if (text.value !== "") {
    const messageUser = document.createElement("div");
    const messageContent = document.createElement("div");
    const messageInfo = document.createElement("div");
    const messageBubble = document.createElement("span");
    const messageTime = document.createElement("span");

    messageUser.classList.add("message-other");
    messageUser.classList.add("message-user");
    messageContent.classList.add("message-content");
    messageInfo.classList.add("message-info");
    messageBubble.classList.add("message-bubble");
    messageTime.classList.add("message-time");

    chatScreen.appendChild(messageUser);
    messageUser.appendChild(messageContent);
    messageContent.appendChild(messageInfo);
    messageInfo.appendChild(messageBubble);
    messageInfo.appendChild(messageTime);

    messageBubble.innerText = text.value;

    function handleDate() {
      const date = new Date();

      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      messageTime.innerText = `${hours}:${minutes}`;
    }

    handleDate();

    text.value = "";

    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }
}

keyBoard.addEventListener("submit", onSubmit);
