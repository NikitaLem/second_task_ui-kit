document.querySelector('.messaging__button').addEventListener('click', send, false);

function send() {
    var sendText = document.querySelector('.messaging__text-box_sent').innerHTML;
    var newMessage = document.createElement("DIV");
    newMessage.classList.add("messaging__text-box", "messaging__text-box_received");
    newMessage.innerHTML = sendText;
    document.querySelector('.messaging__chat-box').appendChild(newMessage);
    sendText = '';
    document.querySelector('.messaging__chat-box').scrollTop = document.querySelector('.messaging__chat-box').scrollHeight;
}