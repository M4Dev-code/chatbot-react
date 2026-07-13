import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";
function ChatMessages({ chatMessages }) {
  const chatContainerRef = useRef(null);
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div ref={chatContainerRef} className="chat-messages-container">
      {chatMessages.map((msg) => (
        <ChatMessage key={msg.id} message={msg.message} sender={msg.sender} />
      ))}
    </div>
  );
}

export default ChatMessages;
