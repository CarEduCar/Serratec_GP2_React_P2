import { useState } from "react";

import ChatButton from "./ChatButton/ChatButton";
import ChatCard from "./ChatCard/ChatCard";

function ChatBot()  {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Olá! 👋 Eu sou o Chef IA. Como posso ajudar você hoje?",
    },
  ]);

  function openChat() {
    setIsOpen(true);
  }

  function closeChat() {
  setIsClosing(true);

  setTimeout(() => {
    setIsClosing(false);
    setIsOpen(false);
  }, 300);
}

 function sendMessage(text) {
  const userMessage = {
    id: Date.now(),
    sender: "user",
    text,
  };

  setMessages((old) => [...old, userMessage]);

  setIsTyping(true);

  setTimeout(() => {
    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: "alooooooou!",
    };

    setMessages((old) => [...old, botMessage]);

    setIsTyping(false);
  }, 800);
}

  return (
    <>
      <ChatButton onClick={openChat} />

      {isOpen && (
        <ChatCard
          onClose={closeChat}
          messages={messages}
          onSendMessage={sendMessage}
          isClosing={isClosing}
          isTyping={isTyping}
        />
      )}
    </>
  );
}

export default ChatBot;