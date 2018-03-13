document.querySelector('.messaging__button').addEventListener('click', send, false);

function send() {
    var sendText = document.querySelector('.messaging__message_give').innerHTML;
    var newMessage = document.createElement("DIV");
    newMessage.classList.add("messaging__message", "messaging__message_get");
    newMessage.innerHTML = sendText;
    document.querySelector('.messaging__chat-box').appendChild(newMessage);
    sendText = 'Hurr!';
    document.querySelector('.messaging__chat-box').scrollTop = document.querySelector('.messaging__chat-box').scrollHeight;
}