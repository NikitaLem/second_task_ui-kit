const myChat = function() {
  const myMessagingVeiw = document.querySelector('.messaging');
  const sendMessBtn = document.querySelector('.messaging__button');

  const sendMessage = function(event) {
    const inputTextView = document.querySelector('.messaging__text-box_sent');
    const chatBox = document.querySelector('.messaging__chat-box');

    if (event.keyCode) {
      if (!(!event.shiftKey && event.keyCode === 13)) return;
    }
    if (inputTextView.textContent === '') return;

    const newMessage = document.createElement("DIV");
    newMessage.classList.add("messaging__text-box", "messaging__text-box_received");
    newMessage.textContent = inputTextView.textContent;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight - newMessage.offsetHeight;

    inputTextView.textContent = '';
  };

  myMessagingVeiw.addEventListener('keydown', sendMessage, false);
  sendMessBtn.addEventListener('click', sendMessage, false);
};

export { myChat };
