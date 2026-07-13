import { useState } from "react";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello! ", sender: "user", id: "id1" },
    {
      message: "Hello! How can I help you today?",
      sender: "bot",
      id: "id2",
    },
    { message: "Can u give me todays date?", sender: "user", id: "id3" },
    {
      message: "Sure! Today's date is June 6, 2024.",
      sender: "bot",
      id: "id4",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
